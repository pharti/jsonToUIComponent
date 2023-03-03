/* eslint-disable prettier/prettier */
export const buttonGenerator = (config) => {
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
            isDisabled: config.isDisabled,
            onPress: () => config.onPressButton()
        },
        children: [{
            type: 'Element',
            tagName: 'p',
            attributes: { color: 'white' },
            children: [
                {
                    type: 'Text',
                    content: `${config.buttonText ? config.buttonText : 'Submit'}`
                },
            ],
        }],
    };
    return defaultButtonConfig;
}