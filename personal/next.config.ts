import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false, // Disable React Strict Mode if causing issues
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
}

export default nextConfig