import { getContent, getText } from '../utils/helper'

export default class DescriptionScraper {
  private page: any
  private url: string
  private truncateLength: number

  private MAX_LENGTH = 5000

  public constructor(page: string, url: string, truncateLength?: number) {
    this.page = page
    this.url = url
    this.truncateLength = truncateLength || this.MAX_LENGTH
  }

  public description(): string | undefined {
    if (this.isAPdf()) return ''

    const descriptions = this.strategies
      .map(([selector, handler]) => handler(this.page, selector))
      .map(
        description =>
          description && description.replace(/(<([^>]+)>)/gi, ' ').replace(/&.*;/g, ' '),
      )
      .filter(description => description)
      .map(description => String(description))

    return descriptions[0] && descriptions[0].slice(0, this.truncateLength)
  }

  private isAPdf(): boolean {
    return this.url.endsWith('.pdf')
  }

  private strategies: [string, (page: cheerio.Root, element: string) => string | undefined][] = [
    ["meta[property='og:description']", getContent],
    ["meta[property='twitter:description']", getContent],
    ["meta[name='description']", getContent],
    ["meta[itemprop='description']", getContent],
    ["meta[property='og:description']", getContent],
    ['p', getText],
    ['pre', getText],
  ]
}
