var webpack = require('webpack');
var path = require('path');

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
	devtool: 'cheap-module-source-map',
	devServer: {
	    port: 7777,
	    host: 'localhost',
	    historyApiFallback: true,
	    noInfo: false,
	    stats: 'minimal',
	    publicPath: 'assets/'
    },
	plugins: [
	    new webpack.SourceMapDevToolPlugin({
	      filename: '[name].js.map',
	      exclude: ['vendor.js']
	    })
	]
});
