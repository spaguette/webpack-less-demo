module.exports = {
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        /* CSS Modules */
        '\\.(css|less|scss)$': 'identity-obj-proxy',

        /* Aliases from webpack */
        '^components(.*)$': '<rootDir>/src/components/$1',
        '^sharedStyles(.*)$': '<rootDir>/src/components/shared/styles/$1',
        '^constants(.*)$': '<rootDir>/src/constants/$1'
    },
    setupTestFrameworkScriptFile: './src/setupTests.js',
    verbose: true
};