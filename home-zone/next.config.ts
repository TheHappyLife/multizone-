/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/reward",
  assetPrefix: "/reward/",
  async rewrites() {
    return [
      {
        source: "/home/:path*",
        destination: "/:path*",
      },
    ];
  },
};
