const path = require('path');
const webpack = require('webpack');
const port = process.env.PORT || 5002;
const HtmlWebPackPlugin = require("html-webpack-plugin");

const entries = [
  
  './src/index.js'
];
module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist/'),
    watchContentBase: true,
    publicPath: "/",
   },
   

  devtool:'cheap-source-map',
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'build.js',
    publicPath: '/'  
  },
  entry: entries,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      { test: /\.(png|jpg|woff|woff2|eot|ttf|svg|gif)$/, loader: 'file-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  
  
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      
    })
  ]
};