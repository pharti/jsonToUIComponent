/* eslint-disable prettier/prettier */
export const modalGenerator = (config) => {
    const defaultModalConfig = {
        type: 'Element',
        tagName: 'modal',
        attributes: {
            isOpen: config.isOpen ? true : false
        },
    };

    //... config parameter is used when the default configuration are needed to override 
    return defaultModalConfig;
}