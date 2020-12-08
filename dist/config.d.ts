export declare type Config = {
    useFallbackImages: boolean;
    imageFallbackStrategies: string[];
    imageSearchBaseUrl: string;
    unsplashBaseUrl: string;
    unsplashClientId: string;
    xRapidapiHost: string;
    xRapidapiKey: string;
    debugMode: boolean;
};
declare const config: Config;
export default config;
