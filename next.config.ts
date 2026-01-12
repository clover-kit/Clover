import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/changelog",
        destination: "https://github.com/clover-kit/Clover/releases",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
