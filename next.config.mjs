/** @type {import('next').NextConfig} */
const nextConfig = {
  // Включаем standalone-сборку для лёгкого Docker-образа
  output: 'standalone',
  reactStrictMode: true,
};

export default nextConfig;
