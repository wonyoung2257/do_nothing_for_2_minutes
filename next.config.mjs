/** @type {import('next').NextConfig} */

const repository = "do_nothing_for_2_minutes";
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  // basePath: "/do_nothing_for_2_minutes",
  output: "export",
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true,
};

export default nextConfig;
