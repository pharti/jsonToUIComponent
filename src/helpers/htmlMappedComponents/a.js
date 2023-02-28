export const getLinkConfig = (config) => {
    let clone = { ...config };
    clone.href = config.attributes.href;
    return clone;
}