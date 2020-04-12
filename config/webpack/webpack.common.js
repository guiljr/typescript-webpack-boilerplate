const nodeExternals = require('webpack-node-externals');

const commonPaths = require('../paths');

module.exports = {
  entry: commonPaths.entryPath,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: commonPaths.outputPath,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
