/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['http://localhost', '127.0.0.1']
  },
  output: 'standalone',
  reactStrictMode: true
};

module.exports = nextConfig;
