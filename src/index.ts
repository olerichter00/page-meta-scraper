import { PageMetaScraper } from '../src/pageMetaScraper'
import config, { Config } from './config'

export const configure = (params: Config) => {
  Object.assign(config, params)
}

export const scrape = async (url: string, keywords: string[] = []) => {
  const metadataScraper = new PageMetaScraper(url, keywords)

  await metadataScraper.loadPage()

  return await metadataScraper.scrape()
}

export default {
  configure: configure,
  scrape: scrape,
}
