export const buttonGenerator = (config) => {
    console.log("Button coNFIG", config);
    //... config parameter is used when the default configuration are needed to override 
    const defaultButtonConfig = {
        type: 'Element',
        tagName: 'button',
        attributes: {
            size: `${config.size ? config.size : 'lg'}`,
            startIcon: '',
            endIcon: '',
            //... bgColor overrides the colorScheme
            bgColor: `${config.bgColor ? config.bgColor : '#06255B'}`,
            colorScheme: `${config.colorScheme ? config.colorScheme : 'secondary'}`,
            isLoading: config.isLoading,
            isLoadingText: `${config.isLoadingText ? config.isLoadingText : "Loading..."}`,
            variant: `${config.variant ? config.variant : "solid"}`,
        },
        children: [{
            type: 'Element',
            tagName: 'p',
            attributes: { color: 'white' },
            children: [
                {
                    type: 'Text',
                    content: `${config.buttonText ? config.buttonText : 'Submit'}`
                }
            ]
        }]
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultButtonConfig[key] = { ...defaultButtonConfig[key], ...config[key] };
        } else {
            defaultButtonConfig[key] = config[key];
        }
    });
    console.log('default button config', defaultButtonConfig)
    return defaultButtonConfig;
}