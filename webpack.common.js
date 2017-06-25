var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry:  {
    main: path.join(__dirname, '/src/index.js')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
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
               presets: ['env'],
               plugins: [
                'transform-runtime',
                'transform-react-jsx',
                'transform-class-properties',
                'transform-decorators-legacy'
               ]
          }
        }]
      }
    ]
  },

 plugins: [
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function(module) {
    //     return module.context && module.context.indexOf('node_modules') !== -1;
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['manifest']
    // })
  ]
}
