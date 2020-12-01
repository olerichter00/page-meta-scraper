const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  optimization: {
    minimize: false,
  },
  entry: './src/pageMetaScraper.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'example'),
    umdNamedDefine: true,
    library: ['pageMetaScraper'],
    libraryExport: 'default',
  },
  plugins: [new BundleAnalyzerPlugin()],
}
