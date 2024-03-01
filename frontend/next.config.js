/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // You can add these as well
        // port: '',
        // pathname: 'arifscloud/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        // You can add these as well
        // port: '',
        // pathname: 'arifscloud/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        // You can add these as well
        // port: '',
        // pathname: 'arifscloud/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // You can add these as well
        // port: '',
        // pathname: 'arifscloud/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'server.bthung313.site',
        // You can add these as well
        // port: '',
        // pathname: 'arifscloud/image/upload/**',
      },
    ],
  },
};

module.exports = nextConfig;