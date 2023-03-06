export const modalGenerator = (config) => {
    const defaultModalConfig = {
        type: 'Element',
        tagName: 'modal',
        attributes: {
            isOpen: true
        },
    };

    //... config parameter is used when the default configuration are needed to override 
    return defaultModalConfig;
}