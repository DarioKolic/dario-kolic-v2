import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "i.imgur.com"
      },
      {
        hostname: "i.ibb.co"
      }
    ]
  }
};

export default nextConfig;
