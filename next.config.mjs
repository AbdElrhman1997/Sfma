import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sfma.srv814693.hstgr.cloud",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
