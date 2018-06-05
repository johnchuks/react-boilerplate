const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
require('dotenv').config();

const environment = process.env.NODE_ENV;

const devConfig = {
  mode: environment || 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    publicPath: '/build',
    port: 9000,
    hot: true,
    publicPath: 'http://localhost:9000'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
module.exports = merge(baseConfig, devConfig);
