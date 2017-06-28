const webpack = require('webpack');
const path = require('path');

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var WebpackChunkHash = require('webpack-chunk-hash');

module.exports = Merge(CommonConfig,{
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: "[name].[chunkhash].js",
    publicPath: 'dist'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest",
      inlineManifest: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false
    })
  ],
});
