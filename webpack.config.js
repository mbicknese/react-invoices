const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// 'css/app.css': path.join(__dirname, 'src', 'App.scss')
const config = {
  entry: path.join(__dirname, 'src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
          fallback: 'style-loader'
        })
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx', '.css'] },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'js/app.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      },
      'API_URL': JSON.stringify(process.env.API_URL) || '"http://localhost:8000/api"'
    }),
    new ExtractTextPlugin({
      filename: 'css/app.css',
      disable: process.env.NODE_ENV === 'development'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true
  }
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'cheap-module-source-map'
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1,
      moveToParents: true
    })
  )
} else {
  config.devtool = 'cheap-module-eval-source-map'
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  )
}

module.exports = config
