const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
console.log(devMode, 'devMode');

module.exports = {
  entry: './assets/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].[id].bundle1.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader, //网上资料显示会对HMR(热加载插件)有影响，建议在prod使用
          'css-loader',
          'postcss-loader', // 处理浏览器兼容
          'sass-loader'
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
    })
  ]
};