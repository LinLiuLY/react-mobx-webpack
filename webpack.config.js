var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: { 
		index: './app/index.js', //Notice that we do not have an explicit vendor entry here
		// vendor: ['moment', 'lodash', 'backbone'],
		// admin: './app/admin.js',
		index_es2015: './app/index-es2015.js',
		index_es2017: './app/index-es2017.js'
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
		}),
		new ExtractTextPlugin('style.css')
	],
	module: {
		rules: [
		{
			test: /\.css$/,
			// use: [ 'style-loader', 'css-loader' ]
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader',
			}
			)
		},
	    { 
	    	test: /\.(woff2?|ttf|eot|svg)$/, 
	    	use: 'url-loader?limit=10000' 
	    }, 
	    {
	    	test: /\.js$/,
	    	exclude: /(node_modules)/,
	    	use: [ {
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
	    	}
	    	]
	    }
	    ]
	}
};