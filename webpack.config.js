// Import path
const path = require('path');
const webpack = require('webpack');

// Export modules
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader'],
      },
    ],
  },
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
