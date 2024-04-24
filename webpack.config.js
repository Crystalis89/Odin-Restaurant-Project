

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    'index':'./src/index.js',
    'home': './src/homemodule.js',
    'menu': './src/menumodule.js',
    'contact':'./src/contactmodule.js'
},
  mode: 'production',
 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 

  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'

    }),
],


};