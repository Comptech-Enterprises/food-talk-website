import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use standalone output for Docker deployments, native output for Vercel
  output: process.env.VERCEL ? undefined : "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Instagram Graph API media is served from these CDNs.
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
      // Cloudflare R2 storage
      {
        protocol: "https",
        hostname: "pub-a6f732adb8214bed92f3d20e103282c4.r2.dev",
      },
      {
        protocol: "https",
        hostname: "**.r2.dev",
      },
    ],
  },
};

export default nextConfig;
