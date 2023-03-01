export const getImgConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    let defaultImgConfig = {
        type: 'Element',
        tagName: 'h2',
        attributes: {
            resizeMode: "contain",
            alt: config.attributes.alt,
            src: config.attributes.src,
            height: ['100'],
        },
    };


    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultImgConfig[key] = { ...defaultImgConfig[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultImgConfig.style = { ...config.styles }
        } else {
            defaultImgConfig[key] = config[key];
        }
    });

    return defaultImgConfig;

}