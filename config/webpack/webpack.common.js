const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const commonPaths = require('../paths');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: './src/bin/www.ts',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: NODE_ENV === 'development' ? ['yarn run:dev'] : ['yarn run:prod'],
    }),
  ],
};
