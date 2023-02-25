export const headingGenerator = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    const defaultTextConfig = {
        type: 'Element',
        tagName: 'heading',
        attributes: {
            size: 'lg',
            color: 'trueGray.900',
        },
        children: [{
            type: 'Text',
            content: `${config.headingText ? config.headingText : 'Heading'}`,
        }]
    };
    return defaultTextConfig;
}