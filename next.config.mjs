/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "oscarg.ws",
      },
    ],
  },
};

export default nextConfig;
