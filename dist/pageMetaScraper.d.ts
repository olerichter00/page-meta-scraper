declare type Metadata = {
    title?: string;
    description?: string;
    imageUrls?: string[];
    favicon?: string;
};
export declare class PageMetaScraper {
    private url;
    private keywords;
    private fetcher;
    private page;
    constructor(url: string, keywords: string[], fetcher: Function);
    loadPage(): Promise<void>;
    scrape(): Promise<Metadata>;
    private images;
    private title;
    private favicon;
    private description;
}
export {};
