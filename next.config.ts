import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["img.freepik.com", "www.freepik.com", "www.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.freepik.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
