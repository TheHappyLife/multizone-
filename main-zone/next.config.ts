import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: `/reward/:path*`,
        destination: `http://localhost:3001/reward/:path*`,
      },
    ];
  },
};

export default nextConfig;
