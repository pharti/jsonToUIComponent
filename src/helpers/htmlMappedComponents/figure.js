export const getFigureConfig = (config) => {

    //... config parameter is used when the default configuration are needed to override 
    let defaultFigureConfig = {
        type: 'Element',
        tagName: 'figure',
        attributes: {
            height: 'auto',
        },
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultFigureConfig[key] = { ...defaultFigureConfig[key], ...config[key] };
        } else {
            defaultFigureConfig[key] = config[key];
        }
    });

    return defaultFigureConfig;

}