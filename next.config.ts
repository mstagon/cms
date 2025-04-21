import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone", // standalone 모드 활성화
    experimental: {
        appDir: true, // App Router 활성화
    },
};

export default nextConfig;