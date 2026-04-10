/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    '65a84781-8907-460e-9f6a-15c1c24f8288-00-2a4p4arqc4d92.pike.replit.dev',
  ],
}

export default nextConfig
