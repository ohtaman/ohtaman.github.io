#!/usr/bin/env bash
# CI と同じビルド手順をローカルで実行して検証する
# push 前に実行: ./scripts/ci-check.sh
# 公式 workflow: https://gohugo.io/host-and-deploy/host-on-github-pages/
set -e
cd "$(dirname "$0")/.."

echo "=== CI simulation: hugo mod get && hugo --minify ==="
hugo mod get
hugo --minify

echo ""
echo "=== Verifying public/ output ==="
if [[ ! -d "public" ]] || [[ -z "$(ls -A public 2>/dev/null)" ]]; then
  echo "ERROR: public/ is empty or missing"
  exit 1
fi
echo "OK: public/ has $(find public -type f | wc -l | tr -d ' ') files"

echo ""
echo "=== CI check passed ==="
