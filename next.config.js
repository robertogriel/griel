/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_STRING: process.env.MONGODB_STRING,
    MONGODB_URL: process.env.MONGODB_URL,
    FRONT_API: process.env.FRONT_API,
  },
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
}

module.exports = nextConfig
