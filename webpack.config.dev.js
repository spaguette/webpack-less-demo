const webpack = require('webpack');

const commonConfig = require('./webpack.config.js');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const TimeFixPlugin = require('time-fix-plugin');

const styleLintOptions = {
    configFile: './stylelint.config.js',
    files: ['**/*.less'],
    fix: true,
    syntax: 'less'
};

const config = commonConfig;

const eslintLoaderConfig = {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
        fix: true
    }
};

if (process.env.NODE_ENV === 'local') {
    config.module.rules.unshift(eslintLoaderConfig);
    config.output.publicPath = '/build/';
    config.plugins = [
        //This TimeFix plugin fixes the webpack watch time.
        //It is here just to apply the "fix: true" option of the stylelint
        //(otherwise webpack will force it into an infinite loop of checks)
        new TimeFixPlugin(),
        new StyleLintPlugin(styleLintOptions),
        new webpack.HotModuleReplacementPlugin()
    ];
}

config.devtool = 'eval-source-map';

module.exports = config;
