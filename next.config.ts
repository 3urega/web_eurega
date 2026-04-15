import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/account-delete",
        destination: "/geodiari/account-delete",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
