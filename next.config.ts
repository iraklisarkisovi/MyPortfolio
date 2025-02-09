/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["pixabay.com", "img.icons8.com"],
  },
};

module.exports = nextConfig;
