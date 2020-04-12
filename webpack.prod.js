const common = require('./webpack.common');
const merge = require('webpack-merge');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(
  common, {
    optimization: {
      minimizer: [
        new UglifyJsWebpackPlugin()
      ]
    }
  }
)