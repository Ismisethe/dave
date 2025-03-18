/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/newyorktowtruck' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/newyorktowtruck/' : '',
  reactStrictMode: true
}

module.exports = nextConfig 