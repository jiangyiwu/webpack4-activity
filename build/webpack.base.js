const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, '../src');
console.log(devMode, process.env.NODE_ENV, 'devMode');

module.exports = {
  mode: 'none',
  entry: './src/assets/index.js',
  output: {
    publicPath: '/',
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
      filename: 'index.html', // 输出路径
      template: APP_PATH + '/index.html', // 项目入口文件
      inject: true
    })
  ]
};