#!/usr/bin/env bash
# Teste le build dans les conditions reelles d'Hostinger (Apache + .htaccess).
#
# Indispensable parce que `npm run preview` NE teste PAS le .htaccess :
# le serveur de Vite fait son propre fallback SPA, donc toutes les routes
# repondent 200 meme si le .htaccess est casse ou absent.
#
#   ./scripts/test-prod.sh          build + tests automatiques
#   ./scripts/test-prod.sh --serve  build + serveur laisse tournant (Ctrl+C pour arreter)

set -euo pipefail

PORT=8899
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST="$ROOT/dist"
MODS=/usr/libexec/apache2
CONF="$(mktemp -d)/httpd.conf"

command -v httpd >/dev/null || { echo "Apache (httpd) introuvable."; exit 1; }

if [ "${1:-}" = "--stop" ]; then
  pid=$(lsof -ti:$PORT 2>/dev/null || true)
  if [ -n "$pid" ]; then kill $pid 2>/dev/null || true; echo "Serveur de test arrete."; else echo "Aucun serveur sur le port $PORT."; fi
  exit 0
fi

if lsof -ti:$PORT >/dev/null 2>&1; then
  echo "Le port $PORT est deja occupe. Lance : ./scripts/test-prod.sh --stop"; exit 1
fi

echo "== Build =="
(cd "$ROOT" && npm run build >/dev/null 2>&1)
echo "dist/ genere"

for f in .htaccess robots.txt sitemap.xml index.html; do
  [ -f "$DIST/$f" ] || { echo "MANQUANT dans dist/ : $f"; exit 1; }
done

cat > "$CONF" <<CONF
ServerName localhost
Listen $PORT
PidFile "$(dirname "$CONF")/httpd.pid"
ErrorLog "$(dirname "$CONF")/error.log"
LoadModule mpm_prefork_module $MODS/mod_mpm_prefork.so
LoadModule authz_core_module $MODS/mod_authz_core.so
LoadModule mime_module $MODS/mod_mime.so
LoadModule dir_module $MODS/mod_dir.so
LoadModule rewrite_module $MODS/mod_rewrite.so
LoadModule headers_module $MODS/mod_headers.so
LoadModule filter_module $MODS/mod_filter.so
LoadModule deflate_module $MODS/mod_deflate.so
LoadModule unixd_module $MODS/mod_unixd.so
TypesConfig /etc/apache2/mime.types
DocumentRoot "$DIST"
<Directory "$DIST">
  AllowOverride All
  Require all granted
</Directory>
CONF

httpd -f "$CONF" -t >/dev/null
stop() { httpd -f "$CONF" -k stop >/dev/null 2>&1 || true; }
trap stop EXIT
httpd -f "$CONF" -k start
for _ in 1 2 3 4 5; do curl -sf -o /dev/null "http://127.0.0.1:$PORT/" && break || sleep 0.4; done

if [ "${1:-}" = "--serve" ]; then
  trap - EXIT
  echo
  echo "Serveur Apache : http://127.0.0.1:$PORT"
  echo "Arret : ./scripts/test-prod.sh --stop"
  exit 0
fi

echo
echo "== Routes (200 attendu partout) =="
fail=0
check() { # chemin, type attendu
  code=$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:$PORT$1")
  ctype=$(curl -s -o /dev/null -w '%{content_type}' "http://127.0.0.1:$PORT$1")
  ok="OK"; [ "$code" = "200" ] || { ok="ECHEC"; fail=1; }
  case "$ctype" in *"$2"*) ;; *) ok="ECHEC"; fail=1;; esac
  printf "  %-6s %-34s %s  %s\n" "$ok" "$1" "$code" "$ctype"
}
check "/"                                text/html
check "/projects"                        text/html
check "/projects/fb-menuiseries-social"  text/html
check "/mentions-legales"                text/html
check "/politique-confidentialite"       text/html
check "/projects/fb_logo.webp"           image/webp
check "/robots.txt"                      text/plain
check "/sitemap.xml"                     xml

echo
echo "== Redirection www -> apex =="
loc=$(curl -sI -H "Host: www.adbdigital.fr" "http://127.0.0.1:$PORT/mentions-legales" | tr -d '\r' | awk 'tolower($1)=="location:"{print $2}')
if [ "$loc" = "https://adbdigital.fr/mentions-legales" ]; then
  printf "  %-6s %s\n" "OK" "$loc"
else
  printf "  %-6s attendu https://adbdigital.fr/mentions-legales, recu '%s'\n" "ECHEC" "$loc"; fail=1
fi

echo
if [ "$fail" = 0 ]; then echo "Tout est bon."; else echo "Des tests ont echoue."; fi
exit $fail
