import { ComponentToFontSizeMap } from "../../constants/mapperConstants";

export const getH2Config = (config) => {
    console.log('H2 config', config);
    //... config parameter is used when the default configuration are needed to override 
    let defaultH2Config = {
        type: 'Element',
        tagName: 'h2',
        attributes: {
            fontSize: ComponentToFontSizeMap['h2'],
        },
    };


    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultH2Config[key] = { ...defaultH2Config[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultH2Config.style = { ...config.styles }
        } else {
            defaultH2Config[key] = config[key];
        }
    });
    console.log('defaultH2Config', defaultH2Config);
    return defaultH2Config;
}