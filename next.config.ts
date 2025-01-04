import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "ksm.regulasipetir.com",
      },
    ],
  },
};

export default nextConfig;
