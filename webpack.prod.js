const webpack = require('webpack');
const path = require('path');

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const WebpackChunkHash = require('webpack-chunk-hash');

module.exports = Merge(CommonConfig,{
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      sourceMap: true
    })
  ],
});
