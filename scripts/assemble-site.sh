#!/usr/bin/env bash
# Merge the Astro landing build (webapp/dist) and the Fumadocs docs build
# (docs/out) into a single directory (dist-site/) for one S3/CloudFront deploy.
#
#   /            -> Astro landing  (owns root: index.html, 404.html, _astro/, ...)
#   /docs/*      -> Fumadocs pages
#   /_next/*     -> Next.js hashed assets
#   /og/*, /llms* -> Fumadocs OG images + llms content
#
# Run from the repo root. Requires both builds to have run first.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
webapp_dist="$root/webapp/dist"
docs_out="$root/docs/out"
out="$root/dist-site"

[ -d "$webapp_dist" ] || { echo "missing $webapp_dist — run the webapp build first" >&2; exit 1; }
[ -d "$docs_out" ]    || { echo "missing $docs_out — run the docs build first" >&2; exit 1; }

rm -rf "$out"
mkdir -p "$out"

# Fumadocs first: only the paths it owns (keeps Next's home/404 out of root).
cp -r "$docs_out/docs"   "$out/docs"
cp -r "$docs_out/_next"  "$out/_next"
[ -d "$docs_out/og" ]       && cp -r "$docs_out/og" "$out/og"
[ -d "$docs_out/api" ]      && cp -r "$docs_out/api" "$out/api"
[ -d "$docs_out/llms.mdx" ] && cp -r "$docs_out/llms.mdx" "$out/llms.mdx"
cp "$docs_out"/llms*.txt "$out/" 2>/dev/null || true

# Astro overlays the root — it owns index.html, 404.html, _astro/, add-repo/, etc.
cp -r "$webapp_dist"/. "$out/"

echo "assembled site -> $out"
