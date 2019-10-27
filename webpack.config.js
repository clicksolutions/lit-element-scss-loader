const path = require('path');

module.exports = {
  mode: "production",
  entry: './index.js',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  target: "node",
  output: {
    filename: 'lit-element-scss-loader.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    library: "lit-element-scss-loader",   // Important
    libraryTarget: 'umd',   // Important
    umdNamedDefine: true   // Important
  },
};
