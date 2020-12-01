import cheerio from 'cheerio'

import MetaImageScraper from './scraper/metaImageScraper'
import MetaDescriptionScraper from './scraper/metaDescriptionScraper'
import MetaTitleScraper from './scraper/metaTitleScraper'
import MetaFaviconScraper from './scraper/metaFaviconScraper'
import config, { Config } from './config'

type Metadata = {
  title?: string
  description?: string
  imageUrls?: string[]
  favicon?: string
}

export const configure = (params: Config) => {
  Object.assign(config, params)
}

export const scrape = async (url: string, keywords: string[], fetcher: Function = fetch) => {
  const metadataScraper = new PageMetaScraper(url, keywords, fetcher)

  await metadataScraper.loadPage()

  return await metadataScraper.scrape()
}

export default {
  configure: configure,
  scrape: scrape,
}

export class PageMetaScraper {
  private url: string
  private keywords: string[]
  private fetcher: Function
  private page: any

  public constructor(url: string, keywords: string[], fetcher: Function = fetch) {
    this.url = url
    this.keywords = keywords
    this.fetcher = fetcher
  }

  public async loadPage() {
    try {
      const response = await this.fetcher(this.url)
      const html = await response.text()
      this.page = cheerio.load(html, {
        xmlMode: true,
        normalizeWhitespace: true,
        decodeEntities: true,
      })
    } catch (error) {}
  }

  public async scrape(): Promise<Metadata> {
    const metadata: Metadata = {}

    try {
      metadata.title = this.title()
      metadata.description = this.description()
      metadata.favicon = this.favicon()
    } catch (error) {}

    metadata.imageUrls = await this.images()

    return metadata
  }

  private async images() {
    return await new MetaImageScraper(this.page, this.url, this.keywords).images()
  }

  private title(): string | undefined {
    return new MetaTitleScraper(this.page).title()
  }

  private favicon(): string | undefined {
    return new MetaFaviconScraper(this.page).favicon()
  }

  private description(): string | undefined {
    return new MetaDescriptionScraper(this.page, this.url, 300).description()
  }
}
