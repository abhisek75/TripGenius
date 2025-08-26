/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quick-labrador-282.convex.cloud",
        port: "",
      },
      {
        protocol: "https",
        hostname: "quick-labrador-282.convex.cloud",
        port: "",
      },
      {
        protocol: "https",
        hostname: "openweathermap.org",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
