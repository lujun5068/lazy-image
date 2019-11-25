const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const devConfig = {
  mode: 'development',
  entry: './example/index.js',
  output: {
    path: path.join(__dirname, '../example'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    })
  ],
  devServer: {
    port: 4000,
    open: true,
    hot: true
  }
}

module.exports = merge(devConfig, baseConfig);