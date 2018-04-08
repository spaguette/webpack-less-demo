var path = require('path');

var config = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loaders: [
                    {
                        loader: 'style-loader',
                        options: { singleton: true }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: 'ubsf_[name]__[local]___[hash:base64:5]'
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /old\.less$/,
                loaders: [
                    {
                        loader: 'style-loader',
                        options: { singleton: true }
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 2 }
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /^(?:(?!old\.less).)+\.less$/,
                loaders: [
                    {
                        loader: 'style-loader',
                        options: { singleton: true }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: 'ubsf_LESS_[folder]__[local]___[hash:base64:5]'
                        }
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    {
                        loader: 'style-loader',
                        options: { singleton: true }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: 'ubsf_SCSS_[folder]__[local]___[hash:base64:5]'
                        }
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },

    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            sharedStyles: path.resolve(__dirname, 'src/components/shared/styles/'),
            constants: path.resolve(__dirname, 'src/constants/')
        },
        extensions: ['*', '.js', '.css', '.less']
    }
};

module.exports = config;
