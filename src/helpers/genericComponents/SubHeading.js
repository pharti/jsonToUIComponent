export const subHeadingGenerator = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    const defaultSubHeadingConfig = {
        type: 'Element',
        tagName: 'subHeading',
        attributes: {
            fontSize: 'md',
            color: 'trueGray.700'
        },
        children: [{
            type: 'Text',
            content: `${config.subHeadingText ? config.subHeadingText : 'Subheading'}`,
        }]
    };
    return defaultSubHeadingConfig;
}