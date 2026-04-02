#!/usr/bin/env bash
set -euo pipefail

# Deploy getfira.io production stack
# Usage: ./deploy.sh [image-tag]
#   image-tag: Docker image tag to deploy (default: latest)

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOY_DIR="$(dirname "$SCRIPT_DIR")"
IMAGE_TAG="${1:-latest}"
IMAGE="ghcr.io/rammicz/getfira:${IMAGE_TAG}"
COMPOSE_FILE="${DEPLOY_DIR}/docker-compose.production.yml"

echo "==> Deploying getfira.io (image: ${IMAGE})"

# Pull the latest app image
echo "==> Pulling ${IMAGE}"
docker pull "$IMAGE"

# Tag as latest if a specific tag was provided
if [ "$IMAGE_TAG" != "latest" ]; then
    docker tag "$IMAGE" "ghcr.io/rammicz/getfira:latest"
fi

# Restart only the app container (nginx stays up for zero-downtime)
echo "==> Restarting app container"
docker compose -f "$COMPOSE_FILE" up -d --no-deps --force-recreate getfira-app

# Wait for health check
echo "==> Waiting for health check..."
timeout=60
elapsed=0
while [ $elapsed -lt $timeout ]; do
    if docker compose -f "$COMPOSE_FILE" exec -T getfira-app curl -sf http://localhost:8080/health > /dev/null 2>&1; then
        echo "==> Health check passed"
        break
    fi
    sleep 2
    elapsed=$((elapsed + 2))
done

if [ $elapsed -ge $timeout ]; then
    echo "!!! Health check failed after ${timeout}s"
    echo "==> Rolling back..."
    docker compose -f "$COMPOSE_FILE" logs --tail=50 getfira-app
    exit 1
fi

# Reload nginx to pick up any config changes
docker compose -f "$COMPOSE_FILE" exec -T nginx nginx -s reload 2>/dev/null || true

# Prune old images
docker image prune -f --filter "label=org.opencontainers.image.source=https://github.com/rammicz/getfira" > /dev/null 2>&1 || true

echo "==> Deployment complete"
