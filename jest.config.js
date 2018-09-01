module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        /* CSS Modules */
        '\\.(css|less)$': 'identity-obj-proxy',

        /* Aliases from webpack */
        '^components(.*)$': '<rootDir>/src/components/$1',
        '^sharedStyles(.*)$': '<rootDir>/src/components/shared/styles/$1',
        '^constants(.*)$': '<rootDir>/src/constants/$1'
    },
    setupFiles: ['@babel/polyfill'],
    setupTestFrameworkScriptFile: './src/setupTests.js',
    verbose: true
};