import { ComponentToFontSizeMap } from "../../constants/mapperConstants";

export const getPConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    let defaultPConfig = {
        type: 'Element',
        tagName: 'p',
        attributes: {
            fontSize: ComponentToFontSizeMap[config.tagName]
        },
    };


    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultPConfig[key] = { ...defaultPConfig[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultPConfig.style = { ...config.styles }
        } else {
            defaultPConfig[key] = config[key];
        }
    });

    return defaultPConfig;

}