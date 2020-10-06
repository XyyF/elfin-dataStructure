const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'elfinDS.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist')
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
    ]
  },
  plugins: []
}