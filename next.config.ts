// // export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   trailingSlash: false,

//   async redirects() {
//     return [
//       {
//         source: "/home",
//         destination: "/",
//         permanent: true,
//       },
//       {
//         source: "/services/brand-identity",
//         destination: "/services/brand-strategy",
//         permanent: true,
//       },
//     ];
//   },

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//       },
//     ],
//     qualities: [75, 90],
//   },
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/brand-identity",
        destination: "/services/brand-strategy",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
       {
        source: "/blog/deep-tech-marketing-evolution-what-changed-between-2020-and-2026",
        destination: "/blog/deep-tech-marketing-vs-traditional-b2b-marketing",
        permanent: true,
      },
    ];
  },

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
