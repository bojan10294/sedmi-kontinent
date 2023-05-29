/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['http://localhost', '127.0.0.1', 'https://clownfish-app-hrroz.ondigitalocean.app', 'clownfish-app-hrroz.ondigitalocean.app']
  },
  output: 'standalone',
  reactStrictMode: true
};

module.exports = nextConfig;
