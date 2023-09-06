/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  transpilePackages: ["@slate-yjs/react"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'liveblocks.io',
        port: '',
        pathname: '/avatars/**',
      },
    ],
  },
};

module.exports = nextConfig;
