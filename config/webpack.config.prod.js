const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const prodConfig = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    publicPath: '/node_modules/react-hook-lazy-image/dist/',
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
}

module.exports = merge(prodConfig, baseConfig);