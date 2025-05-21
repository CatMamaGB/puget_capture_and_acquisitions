/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  redirects: async () => [
    {
      source: '/:path*',
      destination: 'https://pugetca.com/:path*',
      permanent: true
    },
    {
      source: '/www/:path*',
      destination: 'https://www.pugetca.com/:path*',
      permanent: true
    }
  ]
}

module.exports = nextConfig 