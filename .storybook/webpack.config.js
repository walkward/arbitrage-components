const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.jsx?/,
    loader: 'stylelint-custom-processor-loader',
    options: {
      configPath: './.stylelintrc',
    },
    exclude: /node_modules/,
  });
  defaultConfig.resolve.extensions.push(".js", ".jsx");

  return defaultConfig;
};
