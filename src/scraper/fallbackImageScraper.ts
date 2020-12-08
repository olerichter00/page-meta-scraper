import contextualwebClient from '../clients/contextualwebClient'
import unsplashClient from '../clients/unsplashClient'
import config from '../config'

/* prettier-ignore */
const EXCLUDE_KEYWORDS = ['ask', 'show', 'hn', 'the', 'a', 'that', 'this', 'as', 'and', 'or', 'for', 'in', 'out', 'new', 'i']

export default class FallbackImageScraper {
  private keywords: string[] = []

  private strategies: {
    [key: string]: (keywords: string[]) => Promise<string[]>
  } = {}

  private MAX_IMAGES = 10

  public constructor(
    keywords: string[],
    contextualweb = contextualwebClient,
    unsplash = unsplashClient,
  ) {
    this.keywords = this.stripKeywords(keywords)

    this.strategies = {
      contextualweb,
      unsplash,
    }
  }

  public async images(): Promise<string[]> {
    if (config.debugMode)
      return [
        'https://www.tagesspiegel.de/images/grosser-panda-meng-meng_zoo-berlin/24195486/2-format43.jpg',
      ]

    const imageUrls = []

    for (const strategyName of config.imageFallbackStrategies) {
      const strategy = this.strategies[strategyName]

      if (!strategy) continue

      imageUrls.push(...(await strategy(this.keywords)))

      if (imageUrls.length >= 1) return imageUrls.slice(0, this.MAX_IMAGES)
    }

    return imageUrls.slice(0, this.MAX_IMAGES)
  }

  private stripKeywords(keywords: string[]): string[] {
    return keywords
      .map(keyword => keyword.replace(/[^A-Za-z\s]/g, '').replace(/\s{2,}/g, ' '))
      .filter(keyword => keyword.length >= 4)
      .filter(keyword => !EXCLUDE_KEYWORDS.includes(keyword.toLowerCase()))
  }
}
