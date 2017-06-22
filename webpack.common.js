var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");

module.exports = {
  entry: {
    admin: './app/admin.js',
    index: './app/index.js',
    index_es2015: './app/index-es2015.js',
    index_es2017: './app/index-es2017.js'
    // vendor: ['moment', 'lodash', 'backbone'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: "[name].[chunkhash].js",
    publicPath: 'dist',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ExtractTextPlugin.extract({
        //  fallback: 'style-loader',
        //  use: 'css-loader',
        // })
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
           loader: 'babel-loader',
           options: {
               presets: [['es2015', {module: false}]],
               plugins: [
                 'syntax-async-functions',
                 'syntax-dynamic-import',
                 'transform-async-to-generator',
                 'transform-regenerator',
                 'transform-runtime'
               ] 
          }
        }]
      }
    ]
  },

 plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'node_module_vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['manifest']
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest",
      inlineManifest: true
    })
  ]
}
