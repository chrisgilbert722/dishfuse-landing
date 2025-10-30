/** @type {import('next').NextConfig} */
const nextConfig = {
  // completely ignore ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // completely ignore TypeScript errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },

  // optional Framer Motion optimization
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
