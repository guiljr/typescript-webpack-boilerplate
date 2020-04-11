const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const commonPaths = require('../paths');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  watch: false,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: commonPaths.tsConfigPath,
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: commonPaths.tsConfigPath,
    }),
  ],
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: commonPaths.tsConfigPath,
      }),
    ],
  },
});
