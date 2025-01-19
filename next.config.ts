import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "democms.byito.dev",
      },
      {
        hostname: "greeneration.org",
      },
    ],
  },
};

export default nextConfig;
