/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/v3-link' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/v3-link/' : '',
  images: {
    unoptimized: true, // GitHub Pages no soporta optimización de imágenes
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
}

module.exports = nextConfig

