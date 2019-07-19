const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './assets/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].[id].bundle1.js'
  },
  devServer: {
    contentBase: 'dist/index.html',
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'view/index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};