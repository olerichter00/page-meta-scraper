import pageMetaScraper from '../lib/pageMetaScraper'
import fs from 'fs'

const fetcherMock = () => ({
  text: async (_: string) => fs.readFileSync(testFile),
})

let testFile = ''

const url = 'www.test.test'
const keywords = ['key1', 'key2']

pageMetaScraper.configure({ unsplashBaseUrl: 'heyhoo' })

const metadata = async () => pageMetaScraper.scrape(url, keywords, fetcherMock)

describe('description', () => {
  test('with og metadata', async () => {
    testFile = 'test/fixtures/open-graph-meta.html'

    expect(await metadata()).toEqual({
      description: 'og description',
      favicon: 'favicon.png',
      imageUrls: ['www.test.test/og-image.jpg'],
      title: 'og title',
    })
  })

  test('with description meta tag', async () => {
    testFile = 'test/fixtures/meta-description.html'

    expect((await metadata()).description).toEqual('description')
  })

  test('with title tag', async () => {
    testFile = 'test/fixtures/title-tag.html'

    expect((await metadata()).title).toEqual('title')
  })

  test('with p text', async () => {
    testFile = 'test/fixtures/paragraph-text.html'

    expect((await metadata()).description).toEqual('a description')
  })

  test('with pre text', async () => {
    testFile = 'test/fixtures/pre-text.html'

    expect((await metadata()).description).toEqual('a description')
  })
})

describe('imageUrls', () => {
  test('with og metadata', async () => {
    testFile = 'test/fixtures/images.html'

    expect((await metadata()).imageUrls).toEqual([
      'www.test.test/meta-image.jpg',
      'www.test.test/meta-image.jpg',
      'www.test.test/meta-image.jpg',
      'www.test.test/meta-image.jpg',
      'www.test.test/meta-image.jpg',
      'www.test.test/meta-image.jpg',
      'www.test.test/article-image',
      'www.test.test/content-image',
      'www.test.test/an-image',
      'www.test.test/article-image',
    ])
  })
})
