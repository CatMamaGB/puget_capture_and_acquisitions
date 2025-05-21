/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.pugetca.com',
          },
        ],
        destination: 'https://pugetca.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
