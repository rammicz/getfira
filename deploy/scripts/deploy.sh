#!/usr/bin/env bash
set -euo pipefail

# Deploy getfira.io production stack
# Builds the app image locally and configures host nginx.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOY_DIR="$(dirname "$SCRIPT_DIR")"
COMPOSE_FILE="${DEPLOY_DIR}/docker-compose.production.yml"

echo "==> Deploying getfira.io"

# Build and start app container
echo "==> Building and starting app"
docker compose -f "$COMPOSE_FILE" up -d --build

# Wait for health check
echo "==> Waiting for health check..."
timeout=120
elapsed=0
while [ $elapsed -lt $timeout ]; do
    if curl -sf http://127.0.0.1:8080/health > /dev/null 2>&1; then
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

# Install nginx config if host nginx exists
if command -v nginx &> /dev/null || [ -d /etc/nginx ]; then
    echo "==> Installing nginx config"
    sudo cp "${DEPLOY_DIR}/nginx/getfira.conf" /etc/nginx/sites-available/getfira
    sudo ln -sf /etc/nginx/sites-available/getfira /etc/nginx/sites-enabled/getfira
    sudo nginx -t && sudo systemctl reload nginx
    echo "==> Nginx config installed and reloaded"
fi

# Prune old images
docker image prune -f > /dev/null 2>&1 || true

echo "==> Deployment complete"
