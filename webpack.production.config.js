var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

var config = {
  entry: [
    path.resolve(__dirname, 'app/root.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
      },
      {
        test: /\.(png|jpg|)$/,
        loader: 'url-loader?limit=200000',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'app/index.html'), to: path.resolve(__dirname, 'dist'),
      },
      {
        context: path.resolve(__dirname, 'app'),from: 'assets/**/*', to: path.resolve(__dirname, 'dist'),
      },
    ]),
  ],
};

module.exports = config;
