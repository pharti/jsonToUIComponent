
export const imageGenerator = (config) => {
    console.log('config', config);
    const defaultImageConfig = {
        type: 'Element',
        tagName: 'image',
        attributes: {
            source: { uri: `${config.source}` },
            alt: 'Alternate image text',
            size: "xl",
            resizeMode: "cover",
            borderRadius: "4",
            height: `${config.imageHeight ? config.imageHeight : 160}`,
            width: `${config.imageWidth ? config.imageWidth : 160}`
        },
    };

    //... config parameter is used when the default configuration are needed to override 
    return defaultImageConfig;
}