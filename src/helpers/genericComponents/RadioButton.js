/* eslint-disable prettier/prettier */
export const radioButtonGenerator = (config) => {

    const defaultRadioButtonConfig = {
        type: 'Element',
        tagName: 'RadioButton',
        attributes: {
            size: 'md',
            startIcon: '',
            //... bgColor overrides the colorScheme
            variant: `${config.variant ? config.variant : "outline"}`,
            isDisabled: config.isDisabled,
        },
    };

    //... config parameter is used when the default configuration are needed to override
    return defaultRadioButtonConfig;
}