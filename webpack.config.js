var webpack = require('webpack');

var path = require('path');
var fs = require('fs');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var TimeFixPlugin = require('time-fix-plugin');
var autoprefixer = require('autoprefixer');

var serverHost = 'localhost';
var serverPort = '8080';

var options = {
  configFile: './stylelint.config.js',
  files: ['**/*.less'],
  fix: true
};

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
      { test: /\.css$/, loader: 'style?singleton=true!css-loader?modules&importLoaders=1&localIdentName=ubsf_[name]__[local]___[hash:base64:5]!postcss-loader' },
      { test: /old\.less$/, loader: 'style?singleton=true!css-loader?importLoaders=2!postcss-loader!less-loader' },
      { test: /^(?:(?!old\.less).)+\.less$/, loader: 'style?singleton=true!css-loader?modules&importLoaders=2&localIdentName=ubsf_LESS_[folder]__[local]___[hash:base64:5]!postcss-loader!less-loader' },
      { test: /\.scss$/, loader: 'style?singleton=true!css-loader?modules&importLoaders=2&localIdentName=ubsf_SCSS_[folder]__[local]___[hash:base64:5]!postcss-loader!sass-loader' },
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
      components: 'src/components/',
      sharedStyles: 'src/components/shared/styles/',
      constants: 'src/constants/',
    },
    extensions: ['', '.js', '.css', '.less']
  },

  plugins: [
    //This TimeFix plugin fixes the webpack watch time. 
    //It is here just to apply the "fix: true" option of the stylelint 
    //(otherwise webpack will force it into an infinite loop of checks)
    new TimeFixPlugin(), 
    new StyleLintPlugin(options)
  ]
};

if (process.env.NODE_ENV === 'production') {
    config.entry = './src/index.js';
    config.devtool = '';
}

module.exports = config;
