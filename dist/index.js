
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./page-meta-scraper.cjs.production.min.js')
} else {
  module.exports = require('./page-meta-scraper.cjs.development.js')
}
