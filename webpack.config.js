const path = require("path");
const webpack = require("webpack");

module.exports = (config, _targetOptions) => {
  if (config.module && config.module.rules && config.plugins) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),

      // remove all moment locales. list of used locales in the moment-locale-loader file
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      })
    );
    config.resolve = {
      ...config.resolve,
      fallback: { url: require.resolve("url/") },
      alias: {
        Styles: path.resolve(
          __dirname,
          "/packages/frontend/src/styles-export/"
        ),
      },
    };
    config.module.rules.unshift({
      test: /\_export.module.scss$/,
      rules: [
        {
          use: ["style-loader", "css-loader"],
        },
      ],
    });
  }
  return config;
};
