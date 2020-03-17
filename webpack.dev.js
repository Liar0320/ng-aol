// / <reference types="./nodejs.d.ts" />
const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common');

/** @type { import("webpack").Configuration } */
const prodConfig = merge(common, {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'aol.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    // inline: true,
    // compress: true,
    host: '127.0.0.1',
    port: 8080,
    open: true,
  },
  externals: [
    // 引入包里的特定部分
    function(context, request, callback) {
      // 所有 ol 包里的内容
      if (/^ol\/?/.test(request)) {
        // console.log(request);
        // https://segmentfault.com/q/1010000021965610?_ea=33440450
        // https://blog.meathill.com/fe-tool-chain/webpack-4-notes.html
        /** 先关闭webgl */
        const exclude = ['ol/layer/WebGLPoints', 'ol/tilegrid/TileGrid'];

        if (request === exclude[1]) return callback();

        return callback(null, request.replace(/\//g, '.'));
      }
      callback();
    },
  ],
});

module.exports = prodConfig;
