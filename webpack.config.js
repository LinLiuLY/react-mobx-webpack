var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: { 
		main: './app/index.js' //Notice that we do not have an explicit vendor entry here
		// vendor: ['moment', 'lodash', 'backbone'],
		// admin: './app/admin.js'
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common_vendor',
		// 	chunks: ['main', 'vendor']
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'admin_common',
		// 	chunks: ['admin', 'main', 'vendor']
		// }),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'node_module_vendor',
			// this assumes your vendor imports exist in the node_modules directory
			minChunks: function(module) {
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		 }),
		//CommonChunksPlugin will now extract all the common modules from vendor and main bundles
		new webpack.optimize.CommonsChunkPlugin({
			//But since there are no more common modules 
			//between them we end up with just the runtime code included in the manifest file
			name: ['manifest']
		})
	]
};