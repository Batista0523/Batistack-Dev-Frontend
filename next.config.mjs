/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
