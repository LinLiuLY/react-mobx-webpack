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
    path: path.join(__dirname, 'dist/assets'),
    filename: '[name].bundle.js',
    publicPath: 'assets/',
    sourceMapFilename: '[name].map'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   beautify: false,
    //   mangle: {
    //     screw_ie8: true,
    //     keep_fnames: true
    //   },
    //   compress: {
    //     screw_ie8: true
    //   },
    //   comments: false
    // }),
    new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('style.css')
  ],

  module: {
    rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }
      )
    },
      { 
        test: /\.(woff2?|ttf|eot|svg)$/, 
        use: 'url-loader?limit=10000' 
      }
      ]
    }
}