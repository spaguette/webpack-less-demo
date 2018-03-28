var webpack = require('webpack');

var path = require('path');
var fs = require('fs');
var autoprefixer = require('autoprefixer');

var serverHost = 'localhost';
var serverPort = '8080';

var config = {
  entry: [
      'webpack-dev-server/client?http://' + serverHost + ':' + serverPort,
      './src/index.js'
  ],
  devtool: 'eval-source-map',
  output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/build/'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['react', 'es2015', 'stage-0'] } },
      { test: /\.css$/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=ubsf_[name]__[local]___[hash:base64:5]!postcss-loader' },
      { test: /old\.less$/, loader: 'style!css-loader?importLoaders=2!postcss-loader!less-loader' },
      { test: /^(?:(?!old\.less).)+\.less$/, loader: 'style!css-loader?modules&importLoaders=2&localIdentName=ubsf_[folder]__[local]___[hash:base64:5]!postcss-loader!less-loader' },
      { test: /\.scss$/, loader: 'style!css-loader?modules&importLoaders=2&localIdentName=ubsf_[folder]__[local]___[hash:base64:5]!postcss-loader!sass-loader' },
      { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  postcss: function () {
        return [autoprefixer];
  },

  resolve: {
    root: path.resolve(__dirname),
    modules: ['./', 'node_modules'],
    modulesDirectories: ['node_modules'],
    alias: { 
      components: 'src/components/'
    },
    extensions: ['', '.js', '.css', '.less']
  }
};

if (process.env.NODE_ENV === 'production') {
    config.entry = './src/index.js';
    config.devtool = '';
}

module.exports = config;
