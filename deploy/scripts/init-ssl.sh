#!/usr/bin/env bash
set -euo pipefail

# First-time SSL certificate setup for getfira.io
# Run this once on the VPS before starting the full production stack.
#
# Prerequisites:
#   - DNS A records for getfira.io, www.getfira.io, app.getfira.io pointing to this VPS
#   - Docker and docker compose installed
#   - Port 80 open
#
# Usage: ./init-ssl.sh <email>
#   email: Email address for Let's Encrypt notifications

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOY_DIR="$(dirname "$SCRIPT_DIR")"
COMPOSE_FILE="${DEPLOY_DIR}/docker-compose.production.yml"
DOMAINS="getfira.io,www.getfira.io,app.getfira.io"

if [ $# -lt 1 ]; then
    echo "Usage: $0 <email>"
    echo "  email: Email for Let's Encrypt certificate notifications"
    exit 1
fi

EMAIL="$1"

echo "==> Initializing SSL certificates for: ${DOMAINS}"

# Create a temporary nginx config that serves only ACME challenges
TEMP_CONF=$(mktemp)
cat > "$TEMP_CONF" <<'NGINX'
server {
    listen 80;
    server_name getfira.io www.getfira.io app.getfira.io;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 200 'SSL setup in progress';
        add_header Content-Type text/plain;
    }
}
NGINX

echo "==> Starting temporary nginx for ACME challenge..."
docker compose -f "$COMPOSE_FILE" run -d --rm \
    --name getfira-ssl-init \
    -p 80:80 \
    -v "$TEMP_CONF:/etc/nginx/conf.d/default.conf:ro" \
    -v "$(docker volume ls -q | grep certbot-webroot || echo getfira_certbot-webroot):/var/www/certbot" \
    nginx nginx -g 'daemon off;' 2>/dev/null || \
docker run -d --rm \
    --name getfira-ssl-init \
    -p 80:80 \
    -v "$TEMP_CONF:/etc/nginx/conf.d/default.conf:ro" \
    -v "getfira_certbot-webroot:/var/www/certbot" \
    nginx:alpine

# Wait for nginx to start
sleep 3

echo "==> Requesting certificates from Let's Encrypt..."
docker run --rm \
    -v "getfira_certbot-certs:/etc/letsencrypt" \
    -v "getfira_certbot-webroot:/var/www/certbot" \
    certbot/certbot certonly \
    --webroot \
    -w /var/www/certbot \
    -d getfira.io \
    -d www.getfira.io \
    -d app.getfira.io \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email \
    --non-interactive

echo "==> Stopping temporary nginx..."
docker stop getfira-ssl-init 2>/dev/null || true
rm -f "$TEMP_CONF"

echo "==> SSL certificates obtained successfully!"
echo ""
echo "Next steps:"
echo "  1. Start the full stack: docker compose -f deploy/docker-compose.production.yml up -d"
echo "  2. Add a cron job for renewal: 0 0 */15 * * cd $(pwd)/deploy && docker compose exec certbot certbot renew --quiet"
