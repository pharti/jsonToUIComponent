/* eslint-disable prettier/prettier */
export const radioButtonGenerator = (config) => {

    const defaultRadioButtonConfig = {
        type: 'Element',
        tagName: 'radioButton',
        attributes: {
            size: 'md',
            startIcon: '',
            //... bgColor overrides the colorScheme
            isDisabled: config.isDisabled,
            value: config.value
        },
        children: config.children && config.children.length > 0 ? [...config.children] : []
    };

    //... config parameter is used when the default configuration are needed to override
    return defaultRadioButtonConfig;
}