var webpack = require('webpack');
var path = require('path');

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Merge(CommonConfig, {
	devtool: 'cheap-module-source-map',
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
	    // new HtmlWebpackPlugin({
     //      title: 'My App',
     //      filename: 'app.html',
     //      template:  path.join(__dirname, 'index.html'),
     //      chunks: ['main', 'vendor', 'manifest'],
     //      inject: 'body'
     //   })
	]
});
