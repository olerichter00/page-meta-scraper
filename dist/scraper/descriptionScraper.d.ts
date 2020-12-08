export default class DescriptionScraper {
    private page;
    private url;
    private truncateLength;
    private MAX_LENGTH;
    constructor(page: string, url: string, truncateLength?: number);
    description(): string | undefined;
    private isAPdf;
    private strategies;
}
