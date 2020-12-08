export type Config = {
  useFallbackImages: boolean
  imageFallbackStrategies: string[]

  imageSearchBaseUrl: string
  unsplashBaseUrl: string
  unsplashClientId: string
  xRapidapiHost: string
  xRapidapiKey: string

  debugMode: boolean
}

const config: Config = {
  useFallbackImages: false,
  imageFallbackStrategies: [],

  imageSearchBaseUrl:
    'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
  unsplashBaseUrl: '',
  unsplashClientId: '',
  xRapidapiHost: '',
  xRapidapiKey: '',

  debugMode: false,
}

export default config
