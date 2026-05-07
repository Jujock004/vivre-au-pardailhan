import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "googleusercontent.com",
      "images.unsplash.com",
      "pays-saint-ponais.fr",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "images.midilibre.fr",
      },
      {
        protocol: "https",
        hostname: "images.midilibre.fr",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "http",
        hostname: "pays-saint-ponais.fr",
      },
      {
        protocol: "https",
        hostname: "pays-saint-ponais.fr",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
