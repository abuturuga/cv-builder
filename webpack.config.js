const path = require('path');


module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
  },
  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }]
  }
};
