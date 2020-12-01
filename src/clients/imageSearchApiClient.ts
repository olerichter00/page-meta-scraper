import config from '../config'

type Params = {
  pageNumber: number
  pageSize: number
  q: string
  autoCorrect: boolean
  [key: string]: any
}

type JsonResponse = {
  value: {
    url: string
  }[]
}

const fetchImagesFromSearch = async (keywords: string[]): Promise<string[]> => {
  const params: Params = {
    pageNumber: 1,
    pageSize: 10,
    q: keywords.join(' '),
    autoCorrect: true,
  }

  const headers = {
    'x-rapidapi-host': config.xRapidapiHost,
    'x-rapidapi-key': config.xRapidapiKey,
  }

  const url = new URL(config.imageSearchBaseUrl)
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  const response = await fetch(url.toString(), { headers: headers })
  const json: JsonResponse = await response.json()

  const images = json.value.map(image => image.url)

  return images
}

export default fetchImagesFromSearch
