#!/usr/bin/env bash
set -euo pipefail

# Deploy getfira.io production stack
# Builds the app image locally and restarts services.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOY_DIR="$(dirname "$SCRIPT_DIR")"
COMPOSE_FILE="${DEPLOY_DIR}/docker-compose.production.yml"

echo "==> Deploying getfira.io"

# Build and start all services (first deploy brings up everything,
# subsequent deploys rebuild only changed images)
echo "==> Building and starting services"
docker compose -f "$COMPOSE_FILE" up -d --build

# Wait for health check
echo "==> Waiting for health check..."
timeout=120
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
    docker compose -f "$COMPOSE_FILE" logs --tail=50 getfira-app
    exit 1
fi

# Prune old images
docker image prune -f > /dev/null 2>&1 || true

echo "==> Deployment complete"
