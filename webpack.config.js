const path = require('path')

module.exports = {
  mode: 'development',
  entry: './main/index.ts',
  output: {
    filename: 'bundle.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './build')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'ts-loader']
      },
    ]
  },
  plugins: []
}