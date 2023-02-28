export const getHeaderConfig = (config) => {
    let clone = { ...config };
    clone.attributes = {
        ...clone.attributes,
    }
    // clone.attributes.bg = 'emerald.100'
    return clone;
}