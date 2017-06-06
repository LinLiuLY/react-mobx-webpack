var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		main: './app/index.js',
		vendor: ['moment', 'lodash'],
		admin: './app/admin.js'
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common_vendor',
			chunks: ['main', 'vendor']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'node_module_vendor',
			// this assumes your vendor imports exist in the node_modules directory
			minChunks: function(module) {
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		})
	]
};