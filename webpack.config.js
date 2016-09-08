var path = require('path');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
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
        test: /\.less$/,
        loaders: ['style', 'css', 'less',],
      },
      {
        test: /\.(png|jpg|)$/,
        loader: 'url-loader?limit=200000',
      },
    ],
  },
};

module.exports = config;
