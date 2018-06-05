const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.config.base');
require('dotenv').config();


const productionConfig = {
    mode:'production',
    devtool: 'source-map',
    plugins: [
      new UglifyJSPlugin({
        sourceMap: true
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
}
module.exports = merge(baseConfig, productionConfig);
