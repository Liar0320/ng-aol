/*
 * @Author: lich
 * @Date: 2019-10-24 17:56:09
 * @Last Modified by: lich
 * @Last Modified time: 2019-12-26 13:00:17
 * @TODO:采用cdn加速
 */
// / <reference types="./nodejs.d.ts" />
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

/** @type { import("webpack").Configuration } */
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  // watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
    filename: 'bundle.js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        // exclude: [
        //   path.resolve(__dirname, 'node_modules')
        // ],
        loader: 'babel-loader',
        //  query: {
        //   presets: [
        //     ["@babel/env", {
        //       "targets": {
        //         "browsers": "ie > 9"
        //       }
        //     }]
        //   ]
        // }
      },
      {
        test: /\.s[ac]ss$/i,
        // exclude: [path.resolve(__dirname, 'node_modules')],
        include: [path.resolve(__dirname, 'src')],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // name(file) {
              //   if (env === 'development') {
              //     return '[path][name].[ext]';
              //   }
              //   return '[hash].[ext]';
              // },
            },
          },
        ],
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      ngol: path.resolve(__dirname, 'src/component/ol'),
    },
  },
  // https://webpack.docschina.org/concepts/mode/#mode-production
  optimization:{
    // minimize:false
  },
  target:'web',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    // inline: true,
    // compress: true,
    host: '127.0.0.1',
    port: 8080,
    open: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
