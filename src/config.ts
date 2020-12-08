export type ImageFallbackStrategy = 'contextualweb' | 'unsplash'

export type Config = {
  imageFallbackStrategies: ImageFallbackStrategy[]

  unsplashBaseUrl: string
  unsplashClientId: string
  xRapidapiHost: string
  xRapidapiKey: string
  imageSearchBaseUrl: string
}

const config: Config = {
  imageFallbackStrategies: [],

  unsplashBaseUrl: '',
  unsplashClientId: '',
  imageSearchBaseUrl:
    'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
  xRapidapiHost: '',
  xRapidapiKey: '',
}

export default config
