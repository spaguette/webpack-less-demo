var webpack = require('webpack');

var commonConfig = require('./webpack.config.js');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var TimeFixPlugin = require('time-fix-plugin');

var serverHost = 'localhost';
var serverPort = '8080';

var styleLintOptions = {
    configFile: './stylelint.config.js',
    files: ['**/*.less'],
    fix: true,
    syntax: 'less'
};

var config = commonConfig;
config.entry = [
    'webpack-dev-server/client?http://' + serverHost + ':' + serverPort,
    './src/index.js'
];
config.devtool = 'eval-source-map';
config.devServer = {
    hot: true
};
config.plugins = [
    //This TimeFix plugin fixes the webpack watch time.
    //It is here just to apply the "fix: true" option of the stylelint
    //(otherwise webpack will force it into an infinite loop of checks)
    new TimeFixPlugin(),
    new StyleLintPlugin(styleLintOptions),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
];

module.exports = config;
