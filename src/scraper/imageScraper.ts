import { getContent, getSrc, normalizeUrl } from '../utils/helper'

type SelectorStrategy = [
  string,
  (element: cheerio.Root, selector: string) => string | undefined | (string | undefined)[],
]

export default class MetaImageScraper {
  private page: cheerio.Root
  private url: string

  private MAX_IMAGES = 10

  public constructor(page: cheerio.Root, url: string) {
    this.page = page
    this.url = url
  }

  public async images(): Promise<string[]> {
    try {
      const images = this.strategies
        .map(([selector, handler]) => handler(this.page, selector))
        .flat()
        .map(image => normalizeUrl(this.url, image))
        .filter(image => typeof image === 'string')
        .map(image => String(image))
        .slice(0, this.MAX_IMAGES)

      return images
    } catch {}

    return []
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
}
