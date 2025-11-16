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
      {
        hostname: "ksm-kudubisa.cloud",
      },
      {
        hostname: "ksm-kudubisa.cloudhttps",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb",
    },
  },
};

export default nextConfig;
