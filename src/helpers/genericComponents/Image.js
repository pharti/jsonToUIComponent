
export const imageGenerator = (config) => {
    const defaultImageConfig = {
        type: 'Element',
        tagName: 'image',
        attributes: {
            source: { uri: `${config.source}` },
            alt: `${config.altText ? config.altText : 'Alternate image text'}`,
            size: `${config.size ? config.size : 'xl'}`,
            resizeMode: `${config.resizeMode ? config.resizeMode : 'cover'}`,
            borderRadius: `${config.borderRadius ? config.borderRadius : '4'}`,
            height: `${config.imageHeight ? config.imageHeight : 160}`,
            width: `${config.imageWidth ? config.imageWidth : 160}`
        },
    };
    //... config parameter is used when the default configuration are needed to override 
    return defaultImageConfig;
}