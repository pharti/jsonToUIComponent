export const buttonGenerator = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    const defaultButtonConfig = {
        type: 'Element',
        tagName: 'button',
        attributes: {
            size: 'lg',
            startIcon: '',
            endIcon: '',
            //... bgColor overrides the colorScheme
            bgColor: '#06255B',
            colorScheme: 'secondary',
            isLoading: false,
            isLoadingText: "Loading...",
            variant: "solid",
            isDisabled: false,
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
    return defaultButtonConfig;
}