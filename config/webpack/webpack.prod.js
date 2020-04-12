const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');
const commonPaths = require('../paths');
const WebpackShellPlugin = require('webpack-shell-plugin');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = merge(webpackCommon, {
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
              configFile: commonPaths.tsConfigProdPath,
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: true,
      tsconfig: commonPaths.tsConfigProdPath,
    }),
    new WebpackShellPlugin({
      onBuildEnd: ['yarn run:prod'],
    }),
  ],
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: commonPaths.tsConfigProdPath,
      }),
    ],
  },
});
