import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "highcoastalcannabis.com" },
      { protocol: "https", hostname: "kennedyloudcannabis.com" },
      { protocol: "https", hostname: "stclaircannabis.com" },
      { protocol: "https", hostname: "athena-cannabis-images.vercel.app", pathname: "/products/delivery/v1/**" },
    ],
  },
  async redirects() {
    return [
      { source: "/resources/flower-guide", destination: "/resources/weed-flower-guide", permanent: true },
      { source: "/blog", destination: "/resources", permanent: true },
      { source: "/blog/:path*", destination: "/resources", permanent: true },
      { source: "/edibles", destination: "/items/edibles", permanent: true },
      { source: "/vapes", destination: "/items/vapes", permanent: true },
      { source: "/vape-disposables", destination: "/items/vape-disposables", permanent: true },
      { source: "/concentrates", destination: "/items/concentrates", permanent: true },
      { source: "/prerolls", destination: "/items/prerolls", permanent: true },
      { source: "/add-ons", destination: "/items/add-ons", permanent: true },
      { source: "/cigarettes", destination: "/items/cigarettes", permanent: true },
      { source: "/magic", destination: "/items/magic", permanent: true },
      { source: "/info/york-weed-dispensary", destination: "/info/mississauga-weed-dispensary", permanent: true },
      { source: "/info/cheap-weed-york", destination: "/info/cheap-weed-mississauga", permanent: true },
      { source: "/info/native-cigarettes-york", destination: "/info/native-cigarettes-mississauga", permanent: true },
      { source: "/info/weed-store-near-brampton", destination: "/info/weed-store-near-clarkson-lakeshore", permanent: true },
      { source: "/info/dispensary-near-me-york", destination: "/info/dispensary-near-me-mississauga", permanent: true },
      { source: "/resources/local-guides/lakeshore-mississauga-visit-guide", destination: "/visit", permanent: true },
      { source: "/resources/local-guides/lakeshore-24-hour-open-now-faq", destination: "/24-hour-dispensary-mississauga", permanent: true },
      { source: "/brand-visit-faq", destination: "/high-coastal-visit", permanent: true },
      { source: "/resources/local-guides/high-coastal-brand-visit-faq", destination: "/high-coastal-visit", permanent: true },
    ];
  },
};

export default nextConfig;

