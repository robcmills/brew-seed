
var path = require('path')
var webpack = require('webpack')

var srcPath = path.join(__dirname, 'src')
var hotMiddleware = 'webpack-hot-middleware/client?reload=true'

module.exports = {
  entry: {  // "./entry.js",
    main: [hotMiddleware, './src/apps/main-app'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: srcPath,
    }, {
      test: /\.css$/,
      loaders: ['style!css'],
      include: srcPath,
    }],
  },
};