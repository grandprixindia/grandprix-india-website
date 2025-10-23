/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    // Optimize image loading
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  trailingSlash: true,
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable compression
  compress: true,
  // Optimize bundle
  swcMinify: true,
  // Performance optimizations
  poweredByHeader: false,
  generateEtags: false,
  // Optimize for mobile
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig

