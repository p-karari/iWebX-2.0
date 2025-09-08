import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Add your custom image domains here
      {
        protocol: 'https',
        hostname: 'yourdomain.com', // Replace with your actual image domain
        port: '',
        pathname: '/**',
      },
    ],
    // Optional: Configure image sizes for optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Optional: Configure formats
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;