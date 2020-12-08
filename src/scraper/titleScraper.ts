import { getContent, getText } from '../utils/helper'

type SelectorStrategy = [string, (page: cheerio.Root, selector: string) => string | undefined]

export default class MetaTitleScraper {
  private page: any

  public constructor(page: string) {
    this.page = page
  }

  public title(): string | undefined {
    const title = this.strategies
      .map(([selector, handler]) => handler(this.page, selector))
      .filter(title => title)
      .map(title => String(title))

    return title[0]
  }

  private strategies: SelectorStrategy[] = [
    ["meta[property='og:title']", getContent],
    ['title', getText],
  ]
}
