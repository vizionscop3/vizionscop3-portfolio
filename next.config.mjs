/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Azure Static Web Apps or Hostinger: Uncomment the line below
  // output: 'export',
  
  images: {
    // For Azure Static Web Apps or Hostinger: Uncomment the line below
    // unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Helps with hosting compatibility
  trailingSlash: false,
}

export default nextConfig
