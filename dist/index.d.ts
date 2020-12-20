import { Config } from './config';
export declare const configure: (params: Partial<Config>) => void;
export declare const scrape: (url: string, keywords?: string[], fetcher?: (input: RequestInfo, init?: RequestInit | undefined) => Promise<any>) => Promise<{
    title?: string | undefined;
    description?: string | undefined;
    imageUrls?: string[] | undefined;
    favicon?: string | undefined;
}>;
export declare const fallbackImages: (keywords: string[]) => Promise<string[]>;
declare const _default: {
    configure: (params: Partial<Config>) => void;
    scrape: (url: string, keywords?: string[], fetcher?: (input: RequestInfo, init?: RequestInit | undefined) => Promise<any>) => Promise<{
        title?: string | undefined;
        description?: string | undefined;
        imageUrls?: string[] | undefined;
        favicon?: string | undefined;
    }>;
    fallbackImages: (keywords: string[]) => Promise<string[]>;
};
export default _default;
