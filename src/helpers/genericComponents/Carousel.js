
export const carouselGenerator = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    const defaultCaptionConfig = {
        type: 'Element',
        tagName: 'carousel',
        attributes: {
            data: config.data,
            renderItem: (item) => config.renderItem(item)
        },
        children: config.children && config.children.length > 0 ? [...config.children] : []
    };
    return defaultCaptionConfig;
}