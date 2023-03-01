export const getDivConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    let defaultDivConfig = {
        type: 'Element',
        tagName: 'div',
        attributes: {},
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultDivConfig[key] = { ...defaultDivConfig[key], ...config[key] };
        } else {
            defaultDivConfig[key] = config[key];
        }
    });

    return defaultDivConfig;
}