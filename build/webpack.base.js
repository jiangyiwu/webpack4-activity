const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
console.log(devMode, process.env.NODE_ENV, 'devMode');

module.exports = {
  mode: 'none',
  entry: './assets/index.js',
  output: {
    publicPath: '/assets/',
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].[id].bundle1.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest'],
          plugins: ['transform-runtime']
        }
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
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'view/index.html',
      inject: true
    })
  ]
};