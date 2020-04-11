const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');
const commonPaths = require('../paths');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = merge(webpackCommon, {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: commonPaths.tsConfigDevPath,
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ['yarn run:dev'],
    }),
  ],
});
