const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    compress: false,
    port: 4000,
    hot: true,
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        port: 8080
      }
    }
  },
  watchOptions: {
    poll: true
  }
};

module.exports = merge(commonConfig, devConfig);
