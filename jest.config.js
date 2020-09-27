/**
 * jest.config.js 配置文件
 * 文档：https://jestjs.io/docs/zh-Hans/configuration
 */

module.exports = {
    moduleFileExtensions: ['js', 'json'],
    'transform': {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    testRegex: '.+?\\.test\\.js$',
    verbose: true,
    'modulePaths': [
        '<rootDir>/node_modules',
    ],
}