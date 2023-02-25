export const dividerGenerator = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    const defaultDividerConfig = {
        type: 'Element',
        tagName: 'caption',
        attributes: {
            py: `${config.paddingVertical ? config.paddingVertical : '1'}`,
        },
        children: []
    };
    return defaultDividerConfig;
}