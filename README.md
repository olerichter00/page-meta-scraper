<div align="center">
  <h1>PageMetaScraper</h1>
</div>

**pageMetaScraper** is a library to scrape metadata from any page. It scrapes Open Graph metadata, regular HTML metadata and uses text and images from the page as well as images from several image search apis as fallback.

## Install

Install with NPM:

```
npm i --save page-meta-scraper
```

Install with Yarn:

```
yarn add page-meta-scraper
```

## Usage

```javascript
import pageMetaScraper from 'page-meta-scraper'

pageMetaScraper.configure({
  unsplashBaseUrl: '',
  unsplashClientId: '',
  xRapidapiHost: '',
  xRapidapiKey: '',
  imageSearchBaseUrl: '',
})

const url = 'https://example.com'
const keywords = ['example', 'key', 'words']

const metadata = async () => pageMetaScraper.scrape(url, keywords)

// {
//   title: 'page title',
//   description: 'page description',
//   favicon: 'https://example.com/favicon.png',
//   imageUrls: ['https://example.com/page-image.jpg'],
// }
```

### Fallback image APIs

Since some pages don't show any images, [ContextualWeb Image Search API](https://contextualweb.io/image-search-api/) and [Unsplash Image API](https://unsplash.com/developers) can be used as fallback strategies.

**ContextualWeb Image Search API**

If you want to use the [ContextualWeb Image Search API](https://contextualweb.io/image-search-api/) as a fallback strategy you have to provide `xRapidapiHost`, `xRapidapiKey` and `imageSearchBaseUrl` in the config.

**Unsplash Image API**

If you want to use the [Unsplash Image API](https://unsplash.com/developers) as a fallback strategy you have to provide `unsplashBaseUrl` and `unsplashClientId` in the config.

## License

The npm package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
