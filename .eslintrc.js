const path = require('path');

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        jest: true
    },
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'import/no-unresolved': 'error'
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: path.resolve(__dirname, 'webpack.config.dev.js')
            }
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:css-modules/recommended'
    ],
    plugins: [
        'import',
        'react',
        'css-modules'
    ]
};