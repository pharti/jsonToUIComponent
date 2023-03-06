/* eslint-disable prettier/prettier */
export const inputTextGenerator = (config) => {

    const defaultInputTextConfig = {
        type: 'Element',
        tagName: 'inputText',
        attributes: {
            size: 'lg',
            px: '4',
            py: '4',
            startIcon: '',
            //... bgColor overrides the colorScheme
            placeholder: `${config.placeholder ? config.placeholder : "Enter Name"}`,
            variant: `${config.variant ? config.variant : "outline"}`,
            isDisabled: config.isDisabled,
            onChangeText: (text) => config.onTextChange(text),
        },
    };

    //... config parameter is used when the default configuration are needed to override
    return defaultInputTextConfig;
}