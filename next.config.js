const withTwin = require('./withTwin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    footer: process.env.FOOTER
  },
  output: 'standalone',
}

module.exports = withTwin(nextConfig)
