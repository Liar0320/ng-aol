// / <reference types="./nodejs.d.ts" />
const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common');

/** @type { import("webpack").Configuration } */
const prodConfig = merge(common, {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'core', 'index'),
  output: {
    filename: 'aol.core.min.js',
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
        // if (request === 'ol/layer/WebGLPoints') return callback();

        return callback(null, request.replace(/\//g, '.'));
      }
      callback();
    },
  ],
});

console.log(prodConfig);

module.exports = prodConfig;
