/**
 * Configuration Next.js pour MoreFix
 * Développé par Mohammad Radwan
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
