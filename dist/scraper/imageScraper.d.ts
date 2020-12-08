/// <reference types="cheerio" />
export default class MetaImageScraper {
    private page;
    private url;
    private MAX_IMAGES;
    constructor(page: cheerio.Root, url: string);
    images(): Promise<string[]>;
    private strategies;
}
