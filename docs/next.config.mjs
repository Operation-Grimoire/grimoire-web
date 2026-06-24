import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  // Emit dir/index.html so paths match the site's CloudFront IndexRewrite
  // (/docs/x -> /docs/x/index.html), the same convention the Astro build uses.
  trailingSlash: true,
};

export default withMDX(config);
