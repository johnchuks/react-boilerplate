const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
require('dotenv').config();

const environment = process.env.NODE_ENV;

const devConfig = {
  mode: environment || 'development',
  devServer: {
    historyApiFallback: true,
    publicPath: '/build',
    port: 9000,
    hot: true,
    publicPath: 'http://localhost:9000'
  }
}
console.log('i am here', devConfig);
module.exports = merge(baseConfig, devConfig);
