<div align="center">
  <h1>PageMetaScraper</h1>
</div>

**pageMetaScraper** is a library to scrape metadata from any page. It scrapes Open Graph metadata, regular HTML metadata and uses text and images from the page as well as images from several image search apis as fallback.

[![DeepSource](https://deepsource.io/gh/olerichter00/page-meta-scraper.svg/?label=active+issues)](https://deepsource.io/gh/olerichter00/page-meta-scraper/?ref=repository-badge)
[![DeepScan grade](https://deepscan.io/api/teams/11955/projects/15036/branches/294268/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11955&pid=15036&bid=294268)

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

const url = 'https://example.com'

const metadata = async () => pageMetaScraper.scrape(url)

// {
//   title: 'page title',
//   description: 'page description',
//   favicon: 'https://example.com/favicon.png',
//   imageUrls: ['https://example.com/page-image.jpg'],
// }
```

### Fallback image APIs

Since some pages don't show any images, [ContextualWeb Image Search API](https://contextualweb.io/image-search-api/) and [Unsplash Image API](https://unsplash.com/developers) can be used as fallback strategies. Both strategies have to be configured and keywords have to be provided to search for images:

```javascript
import pageMetaScraper from 'page-meta-scraper'

pageMetaScraper.configure({
  useFallbackImages: true,
  imageFallbackStrategies: ['contextualweb', 'unsplash'],

  unsplashBaseUrl: 'URL',
  unsplashClientId: 'URL',
  xRapidapiHost: 'HOST',
  xRapidapiKey: 'KEY',
})

const url = 'https://example.com'
const keywords = ['example', 'key', 'words']

const metadata = await pageMetaScraper.scrape(url, keywords)
```

The fallback images can also be used by themself:

```javascript
import pageMetaScraper from 'page-meta-scraper'

pageMetaScraper.configure({
  useFallbackImages: true,
  imageFallbackStrategies: ['contextualweb', 'unsplash'],

  unsplashBaseUrl: '',
  unsplashClientId: '',
  xRapidapiHost: '',
  xRapidapiKey: '',
})

const keywords = ['example', 'key', 'words']

const imageUrls = await pageMetaScraper.fallbackImages(keywords)
```

**ContextualWeb Image Search API**

If you want to use the [ContextualWeb Image Search API](https://contextualweb.io/image-search-api/) as a fallback strategy you have to provide `xRapidapiHost`, `xRapidapiKey` and `imageSearchBaseUrl` in the config.

**Unsplash Image API**

If you want to use the [Unsplash Image API](https://unsplash.com/developers) as a fallback strategy you have to provide `unsplashBaseUrl` and `unsplashClientId` in the config.

## License

The npm package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
