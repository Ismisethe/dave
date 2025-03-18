/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost']
  },
  basePath: process.env.NODE_ENV === 'production' ? '/tow-truck-directory' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tow-truck-directory/' : '',
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    });
    return config;
  },
}

module.exports = nextConfig 