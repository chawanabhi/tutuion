// import type { NextConfig } from "next";

// const isProduction = process.env.NODE_ENV === "production";

// const securityHeaders = [
//   {
//     key: "X-Content-Type-Options",
//     value: "nosniff",
//   },
//   {
//     key: "Referrer-Policy",
//     value: "strict-origin-when-cross-origin",
//   },
//   {
//     key: "Permissions-Policy",
//     value:
//       "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
//   },
//   {
//     key: "Content-Security-Policy",
//     value: [
//       "default-src 'self'",
//       "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
//       "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
//       "font-src 'self' fonts.gstatic.com",
//       "img-src 'self' data: blob: https:",
//       "media-src 'self'",
//       "connect-src 'self' https://docs.google.com https://forms.gle https://wa.me https://whatsapp.com",
//       "frame-src https://docs.google.com https://forms.gle",
//       "frame-ancestors 'self'",
//       "object-src 'none'",
//       "base-uri 'self'",
//       "form-action 'self' https://docs.google.com https://forms.gle",
//       isProduction ? "upgrade-insecure-requests" : "",
//     ]
//       .filter(Boolean)
//       .join("; "),
//   },
//   ...(isProduction
//     ? [
//         {
//           key: "Strict-Transport-Security",
//           value: "max-age=31536000; includeSubDomains; preload",
//         },
//       ]
//     : []),
// ];

// const nextConfig: NextConfig = {
//   cacheComponents: true,
//   partialPrefetching: true,
//   turbopack: {
//     rules: {
//       "*.css": {
//         loaders: ["@tailwindcss/turbopack"],
//         as: "*.css",
//       },
//     },
//   },
//   async headers() {
//     return [
//       {
//         source: "/:path*",
//         headers: securityHeaders,
//       },
//     ];
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const isGitHubPagesBuild =
  isProduction && process.env.GITHUB_PAGES === "true";

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      "font-src 'self' fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "media-src 'self'",
      "connect-src 'self' https://docs.google.com https://forms.gle https://wa.me https://whatsapp.com",
      "frame-src https://docs.google.com https://forms.gle",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://docs.google.com https://forms.gle",
      isProduction ? "upgrade-insecure-requests" : "",
    ]
      .filter(Boolean)
      .join("; "),
  },
  ...(isProduction
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains; preload",
        },
      ]
    : []),
];

const nextConfig: NextConfig = {
  ...(isGitHubPagesBuild
    ? {
        output: "export" as const,
        basePath: "/tutuion",
      }
    : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_GITHUB_PAGES: isGitHubPagesBuild ? "true" : "false",
  },
  ...(!isGitHubPagesBuild
    ? {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: securityHeaders,
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
