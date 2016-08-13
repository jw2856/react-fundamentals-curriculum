'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: []
  },
  output: {
    filename: 'index_bundle.js',
    path: path.join(__dirname, '/dist')
  },
  plugins: [HTMLWebpackPluginConfig]
};

