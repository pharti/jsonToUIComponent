export const captionGenerator = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    const defaultCaptionConfig = {
        type: 'Element',
        tagName: 'caption',
        attributes: {
            fontSize: 'xs',
            color: 'trueGray.500',
        },
        children: [{
            type: 'Text',
            content: `${config.captionText ? config.captionText : 'Caption'}`,
        }]
    };
    return defaultCaptionConfig;
}