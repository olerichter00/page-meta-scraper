import fetchImagesFromSearch from '../clients/imageSearchApiClient'
import fetchImagesFromUnsplash from '../clients/unsplashSearchApiClient'
import { getContent, getSrc, normalizeUrl } from '../utils/helper'
import config from '../config'

/* prettier-ignore */
const EXCLUDE_KEYWORDS = ['ask', 'show', 'hn', 'the', 'a', 'that', 'this', 'as', 'and', 'or', 'for', 'in', 'out', 'new', 'i']

type SelectorStrategy = [
  string,
  (element: cheerio.Root, selector: string) => string | undefined | (string | undefined)[],
]
type FallbackStrategy = [string[], (keywords: string[]) => Promise<string[]>]

export default class MetaImageScraper {
  private page: cheerio.Root
  private url: string
  private keywords: string[] = []

  private MAX_IMAGES = 10

  public constructor(page: cheerio.Root, url: string, keywords: string[]) {
    this.page = page
    this.url = url
    this.keywords = this.stripKeywords(keywords)
  }

  public async images(): Promise<string[]> {
    const imageUrls = []

    try {
      imageUrls.push(...this.pageImages())
    } catch {}

    if (imageUrls.length >= 2) return imageUrls.slice(0, this.MAX_IMAGES)

    for (const strategyName of config.imageFallbackStrategies) {
      const strategy = this.fallbackStrategies[strategyName]

      imageUrls.push(...(await this.fallbackImages(strategy)))

      if (imageUrls.length >= 1) return imageUrls.slice(0, this.MAX_IMAGES)
    }

    return imageUrls.slice(0, this.MAX_IMAGES)
  }

  private pageImages(): string[] {
    try {
      const images = this.strategies
        .map(([selector, handler]) => handler(this.page, selector))
        .flat()
        .map(image => normalizeUrl(this.url, image))
        .filter(image => typeof image === 'string')
        .map(image => String(image))

      return images
    } catch {}

    return []
  }

  private async fallbackImages(strategy: FallbackStrategy): Promise<string[]> {
    try {
      const [keywords, handler] = strategy

      return await handler(keywords)
    } catch (error) {
      return []
    }
  }

  private stripKeywords(keywords: string[]): string[] {
    return keywords
      .map(keyword => keyword.replace(/[^A-Za-z\s]/g, '').replace(/\s{2,}/g, ' '))
      .filter(keyword => keyword.length >= 4)
      .filter(keyword => !EXCLUDE_KEYWORDS.includes(keyword.toLowerCase()))
  }

  private strategies: SelectorStrategy[] = [
    ['meta[property="og:image:secure_url"]', getContent],
    ['meta[property="og:image:url"]', getContent],
    ['meta[property="og:image"]', getContent],
    ['meta[name="twitter:image:src"]', getContent],
    ['meta[name="twitter:image"]', getContent],
    ['meta[itemprop="image"]', getContent],
    ['article img[src]', getSrc],
    ['#content img[src]', getSrc],
    ['img[alt*="author" i]', getSrc],
    ['img[src]:not([aria-hidden="true"])', getSrc],
  ]

  private fallbackStrategies: { [key: string]: FallbackStrategy } = {
    contextualweb: [this.keywords, fetchImagesFromSearch],
    unsplash: [this.keywords, fetchImagesFromUnsplash],
  }
}
