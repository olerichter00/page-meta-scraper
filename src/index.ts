import FallbackImageScraper from './scraper/fallbackImageScraper'
import { PageMetaScraper } from '../src/pageMetaScraper'
import config, { Config } from './config'

export const configure = (params: Partial<Config>) => {
  Object.assign(config, params)
}

export const scrape = async (
  url: string,
  keywords: string[] = [],
  fetcher: (input: RequestInfo, init?: RequestInit | undefined) => Promise<any> = fetch,
) => {
  const metadataScraper = new PageMetaScraper(url, keywords, fetcher)

  await metadataScraper.loadPage()

  return await metadataScraper.scrape()
}

export const fallbackImages = async (keywords: string[]): Promise<string[]> => {
  return await new FallbackImageScraper(keywords).images()
}

export default {
  configure: configure,
  scrape: scrape,
  fallbackImages: fallbackImages,
}
