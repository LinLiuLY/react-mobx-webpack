const webpack = require('webpack');
const path = require('path');

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    sourceMapFilename: '[name].map'
  },
	devtool: 'eval-source-map',
	devServer: {
	    port: 7000
    },
	plugins: [
	    // new webpack.SourceMapDevToolPlugin({
	    //   filename: '[name].js.map',
	    //   exclude: ['vendor.js', 'manifest.js']
	    // })
    new webpack.NamedModulesPlugin()
	]
  // externals: {
  //   'react/addons': true,
  //   'react/lib/ExecutionEnvironment': true,
  //   'react/lib/ReactContext': true,
  // }
});
