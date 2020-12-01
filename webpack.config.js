const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/pageMetaScraper.ts',
  output: {
    path: path.resolve('lib'),
    filename: 'pageMetaScraper.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
}
