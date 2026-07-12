// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   trailingSlash: false,
//   images: {
//     domains: ["cdn.sanity.io"],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    qualities: [75, 90],
  },
};

export default nextConfig;
