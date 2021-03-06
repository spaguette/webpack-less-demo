const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { singleton: true }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: 'pref_[folder]__[local]___[hash:base64:5]'
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /old\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { singleton: true }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
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
                            localIdentName: 'pref_LESS_[folder]__[local]___[hash:base64:5]'
                        }
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' }
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
        extensions: ['.js', '.css', '.less']
    },

    performance: {
        maxEntrypointSize: 300000,
        maxAssetSize: 300000
    }
};

module.exports = config;
