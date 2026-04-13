import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pullim-design-system-preview",
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-hook-form": path.resolve("./node_modules/react-hook-form"),
    };
    return config;
  },
};

export default nextConfig;
