/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  distDir: "build",
  pageExtensions: ["jsx", "js", "tsx", "ts"],
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-tree",
    "rc-table",
    "@babel",
  ],
};

export default nextConfig;
