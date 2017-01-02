const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cssExtract = new ExtractTextPlugin('main.css');

module.exports = {
  target: 'web',
  entry: './src/main.js',
  output: {
    path: './build',
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    cssExtract,
    new CopyWebpackPlugin([{ from: './src/images' }])    
  ],
  devtool: 'source-map',
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [ 'es2015' ]
      }
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.scss/,
      loader: cssExtract.extract(
        'style-loader',
        'css-loader?sourceMap!sass-loader?sourceMap'
      )
    }, {
      test: /\.css/,
      loader: cssExtract.extract(
        'style-loader',
        'css-loader'
      )
    }, {
      test: /\.gif/,
      loader: 'file-loader'
    }, {
      test: /\.jpg/,
      loader: 'file-loader'
    }, {
      test: /\.png/,
      loader: 'file-loader'
    }]
  }
};