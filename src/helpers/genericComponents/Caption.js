/* eslint-disable prettier/prettier */
export const captionGenerator = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    const defaultCaptionConfig = {
        type: 'Element',
        tagName: 'caption',
        attributes: {
            fontSize: `${config.fontSize ? config.fontSize : 'xs'}`,
            color: `${config.color ? config.color : 'trueGray.500'}`,
        },
        children: [{
            type: 'Text',
            content: `${config.captionText ? config.captionText : 'Caption'}`,
        }]
    };
    return defaultCaptionConfig;
}