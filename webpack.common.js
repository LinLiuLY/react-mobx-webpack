const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  {
    main: path.join(__dirname, '/src/js/index.js')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [path.join(__dirname, 'src'), path.join(__dirname, 'src', 'js'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
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
            limit: 10000
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
           loader: 'babel-loader'
        }]
      }
    ]
  },

 plugins: [
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'vendor',
       minChunks: function(module) {
         return module.context && module.context.indexOf('node_modules') !== -1;
       }
     }),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'manifest',
       minChunks: Infinity
     }),
     new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'App.html',
        template: path.join(__dirname, 'src', 'index.html'),
        inject: 'body',
        chunks: ['manifest', 'vendor', 'main']
     })
  ]
}
