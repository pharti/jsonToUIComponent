export const getArticleConfig = (config) => {
    let clone = { ...config };
    clone.attributes = {
        ...clone.attributes,
        borderColor: "coolGray.200",
        overflow: "hidden",
        //... Border Radius
        rounded: "lg",
        borderWidth: "1",
        backgroundColor: "white",
        //... Padding
        p: '4',
        //... Breakpoints
        w: ['100%', '100%', '48%', '48%', '32%', '24%'],
    }
    // clone.attributes.bg = 'emerald.100'
    return clone;
}