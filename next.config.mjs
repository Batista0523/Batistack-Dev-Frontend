/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-markdown"],
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async redirects() {
    return [
      {
        source: "/speedPage",
        destination: "/",
        permanent: true,
      },
      {
        source: "/digital-presence",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
