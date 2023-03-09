export const modalContentGenerator = (config) => {
    const defaultModalConfig = {
        type: 'Element',
        tagName: 'modalContent',
        attributes: {
            maxWidth: "350",
            maxH: "212"
        },
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultModalConfig[key] = { ...defaultModalConfig[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultModalConfig.style = { ...config.styles }
        } else {
            defaultModalConfig[key] = config[key];
        }
    });

    //... config parameter is used when the default configuration are needed to override 
    return defaultModalConfig;
}