/* eslint-disable prettier/prettier */
export const iconGenerator = (config) => {
    const defaultIconConfig = {
        type: 'Element',
        tagName: 'icon',
        attributes: {
            as: config.as,
            name: `${config.name}`,
            color: `${config.color ? config.color : 'trueGray.700'}`,
            size: `${config.size ? config.size : 'xl'}`,
        },
    };

    //... config parameter is used when the default configuration are needed to override 
    return defaultIconConfig;
}