import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/projects/gruppa-godnosti/realozator",
        destination: "/projects/gruppa-godnosti/rezhisser",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
