
export const avatarGenerator = (config) => {
    const defaultAvatarConfig = {
        type: 'Element',
        tagName: 'avatar',
        attributes: {
            source: { uri: `${config.source}` },
            alt: `${config.altText ? config.altText : 'Alternate image text'}`,
            size: `${config.size ? config.size : 'xl'}`,
            alignSelf: "center",
            bg: `${config.bg ? config.bg : 'green.500'}`,
        },
        children: [{
            type: 'Element',
            tagName: 'h3',
            attributes: {
                color: `${config.textColor ? config.textColor : 'white'}`,
            },
            children: [
                {
                    type: 'Text',
                    content: `${config.avatarInitials ? config.avatarInitials : 'NA'}`
                }
            ]
        }]
    };

    //... config parameter is used when the default configuration are needed to override 
    return defaultAvatarConfig;
}