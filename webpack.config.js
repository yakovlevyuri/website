const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app/root.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel',],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass',],
      },
      {
        test: /\.(png|jpg|)$/,
        loader: 'url-loader?limit=200000',
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader',
      },
    ],
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './some-folder')],
  }
};

module.exports = config;
