//... Container is a basic content wrapper
export const containerGenerator = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    const defaultContainerConfig = {
        type: 'Element',
        tagName: 'container',
        attributes: {
            borderColor: `${config.borderColor ? config.borderColor : "coolGray.200"}`,
            overflow: "hidden",
            rounded: `${config.rounded ? config.rounded : "lg"}`,
            borderWidth: `${config.borderWidth ? config.borderWidth : "1"}`,
            backgroundColor: `${config.backgroundColor ? config.backgroundColor : "white"}`,
            p: `${config.padding ? config.padding : '4'}`,
        },
    };
    return defaultContainerConfig;
}
