module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
    eslint: {
      // ONLY FOR DEVELOPMENT !@!@!#&¨!*¨*#!¨@#&!*#
      ignoreDuringBuilds: true,
    },
  },
};
