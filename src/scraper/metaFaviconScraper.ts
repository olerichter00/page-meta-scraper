import { getHref } from '../utils/helper'

export default class MetaFaviconScraper {
  private page: any

  public constructor(page: string) {
    this.page = page
  }

  public favicon(): string | undefined {
    const favicons = this.strategies
      .map(([selector, handler]) => handler(this.page, selector))
      .filter(favicons => favicons)
      .map(favicons => String(favicons))

    return favicons[0]
  }

  private strategies: [string, (page: cheerio.Root, selector: string) => string | undefined][] = [
    ["link[rel='icon']", getHref],
  ]
}
