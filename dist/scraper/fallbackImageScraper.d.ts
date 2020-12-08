export default class FallbackImageScraper {
    private keywords;
    private strategies;
    private MAX_IMAGES;
    constructor(keywords: string[], contextualweb?: (keywords: string[]) => Promise<string[]>, unsplash?: (keywords: string[]) => Promise<string[]>);
    images(): Promise<string[]>;
    private stripKeywords;
}
