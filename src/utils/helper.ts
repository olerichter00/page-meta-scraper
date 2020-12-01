const MAX_TEXT_LENGTH = 300

export const getContent = (page: cheerio.Root, selector: string) => page(selector).attr('content')

export const getSrc = (page: cheerio.Root, selector: string) => {
  const result: (string | undefined)[] = []
  page(selector).each((_i, e) => result.push(page(e).attr('src')))

  return result
}

export const getText = (page: cheerio.Root, selector: string) => page(selector).text()

export const getHref = (page: cheerio.Root, selector: string) => page(selector).attr('href')

export const stripFilenameFromUrl = (url: string) => {
  return url.replace(/[a-zA-Z]*\.html?$/g, '')
}

export const normalizeUrl = (fullUrl: string, url: string | undefined): string | undefined => {
  const urlRegExp = new RegExp('^(?:[a-z]+:)?//', 'i')

  if (!url) return

  const isFullPath = urlRegExp.test(url)
  const isAbsolutePath = /^\//i.test(url)

  if (isFullPath) return url

  if (isAbsolutePath) return `${new URL(fullUrl).origin}${url}`

  return `${stripFilenameFromUrl(fullUrl)}/${url}`
}
