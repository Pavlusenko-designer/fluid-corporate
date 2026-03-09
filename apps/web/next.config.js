/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  transpilePackages: ['@ui/components', '@sanity-lib/client'],
  experimental: {
    optimizePackageImports: ['@portabletext/react'],
  },
};

module.exports = nextConfig;
