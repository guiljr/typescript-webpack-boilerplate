const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.ts'),
  tsConfigDevPath: path.resolve(__dirname, '../', 'config/tsconfig/tsconfig.json'),
  tsConfigProdPath: path.resolve(__dirname, '../', 'config/tsconfig/tsconfig.prod.json'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
