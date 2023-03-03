/* eslint-disable prettier/prettier */
export const linkGenerator = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    const defaultLinkConfig = {
        type: 'Element',
        tagName: 'a',
        attributes: {
            href:'https://nativebase.io',
            py: `${config.paddingVertical ? config.paddingVertical : '1'}`,
        },
        children: [{
            type: 'Element',
            tagName: 'p',
            attributes: { color: 'blue',  onPress: () => config.onPressButton(),},
            children: [
                {
                    type: 'Text',
                    content: 'Click here to open documentation.',
                },
            ],
        }],
    };
    return defaultLinkConfig;
}