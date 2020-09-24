/**
 * jest.config.js 配置文件
 * 文档：https://jestjs.io/docs/zh-Hans/configuration
 */
console.log('rengar log', 111)

module.exports = {
    moduleFileExtensions: ['js', 'json'],
    'transform': {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/main/$1',
    },
    testRegex: '.+?\\.test\\.js$',
    verbose: true,
    'modulePaths': [
        '<rootDir>/node_modules',
    ],
}