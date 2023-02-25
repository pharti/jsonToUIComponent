//... Container is a basic content wrapper
export const containerGenerator = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    const defaultContainerConfig = {
        type: 'Element',
        tagName: 'container',
        attributes: {
            borderColor: "coolGray.200",
            overflow: "hidden",
            rounded: "lg",
            borderWidth: "1",
            backgroundColor: "white",
            p: '4'
        },
    };
    return defaultContainerConfig;
}
