var webpack = require('webpack');
var path = require('path');

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Merge(CommonConfig, {
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
//    publicPath: 'dist',
    sourceMapFilename: '[name].map'
  },
	devtool: 'eval',
	devServer: {
	    port: 7777,
	    host: 'localhost',
	    hot: true
    },
	plugins: [
	    // new webpack.SourceMapDevToolPlugin({
	    //   filename: '[name].js.map',
	    //   exclude: ['vendor.js', 'manifest.js']
	    // })
	     new webpack.NamedModulesPlugin(),
	     new HtmlWebpackPlugin({
           title: 'My App',
           filename: 'App.html',
           template: path.join(__dirname, 'src', 'index.html'),
           inject: 'body',
           chunks: ['manifest', 'vendor', 'main']
        })
	]
});
