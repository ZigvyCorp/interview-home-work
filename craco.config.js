module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        fs: false,
        os: false,
        path: false,
      };
      return webpackConfig;
    },
  },
};
