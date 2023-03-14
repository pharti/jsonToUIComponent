/* eslint-disable prettier/prettier */
export const modalGenrator = (config) => {

    const defaultModalGeneratorConfig = {
        type: 'Element',
        tagName: 'inputText',
        attributes: {
            size: config.modalSize,
            px: '4',
            py: '4',
            placeholder: `${config.placeholder ? config.placeholder : "Enter Name"}`,
            variant: `${config.variant ? config.variant : "outline"}`,
            isOpen: config.isOpen,
            onClose: (text) => config.onTextChange(text),
        },
    };

    //... config parameter is used when the default configuration are needed to override
    return defaultModalGeneratorConfig;
}