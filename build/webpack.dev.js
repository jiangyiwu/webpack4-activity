const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './',
    open: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
