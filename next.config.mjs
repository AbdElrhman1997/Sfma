import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "just.isamstore.com",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
