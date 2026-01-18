import path from 'node:path';
import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const withMDX = createMDX();

const monorepoRoot = path.resolve(process.cwd(), '..', '..');

const config: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: monorepoRoot,
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
    ];
  },
};

export default withMDX(config);
