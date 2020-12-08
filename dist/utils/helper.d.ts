/// <reference types="cheerio" />
export declare const getContent: (page: cheerio.Root, selector: string) => string | undefined;
export declare const getSrc: (page: cheerio.Root, selector: string) => (string | undefined)[];
export declare const getText: (page: cheerio.Root, selector: string) => string;
export declare const getHref: (page: cheerio.Root, selector: string) => string | undefined;
export declare const stripFilenameFromUrl: (url: string) => string;
export declare const normalizeUrl: (fullUrl: string, url: string | undefined) => string | undefined;
