export const getFigureConfig = (config) => {
    let clone = { ...config };

    clone.attributes = { ...clone.attributes, height: 'auto', }
    // clone.attributes.bg = 'emerald.100'
    return clone;
}