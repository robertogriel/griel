/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_STRING: process.env.MONGODB_STRING,
    MONGODB_URL: process.env.MONGODB_URL
  }
}

module.exports = nextConfig
