const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    })
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
    }]
  }
};