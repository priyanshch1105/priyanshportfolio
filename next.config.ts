import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["*.monkeycode-ai.live", "monkeycode-ai.live", "localhost"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "three/webgpu": false,
    }
    return config
  },
}

export default nextConfig
