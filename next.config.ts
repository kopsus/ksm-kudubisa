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
        hostname: "images.tokopedia.net",
      },
    ],
  },
};

export default nextConfig;
