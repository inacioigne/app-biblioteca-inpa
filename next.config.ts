import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
     remotePatterns: [new URL('https://img.playbook.com/**')],
  },
};

export default nextConfig;
