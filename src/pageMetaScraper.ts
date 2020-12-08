import cheerio from 'cheerio'

import MetaImageScraper from './scraper/imageScraper'
import DescriptionScraper from './scraper/descriptionScraper'
import MetaTitleScraper from './scraper/titleScraper'
import FaviconScraper from './scraper/faviconScraper'
import FallbackImageScraper from './scraper/fallbackImageScraper'
import config from './config'

type Metadata = {
  title?: string
  description?: string
  imageUrls?: string[]
  favicon?: string
}

export class PageMetaScraper {
  private url: string
  private keywords: string[]
  private fetcher: Function
  private page: any

  public constructor(url: string, keywords: string[], fetcher: Function) {
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
    const images = await new MetaImageScraper(this.page, this.url).images()

    if (images.length > 0) return images

    if (config.useFallbackImages) return await new FallbackImageScraper(this.keywords).images()

    return []
  }

  private title(): string | undefined {
    return new MetaTitleScraper(this.page).title()
  }

  private favicon(): string | undefined {
    return new FaviconScraper(this.page).favicon()
  }

  private description(): string | undefined {
    return new DescriptionScraper(this.page, this.url, 300).description()
  }
}
