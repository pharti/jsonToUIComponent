export const getImgConfig = (config) => {
    let clone = { ...config };
    clone.attributes = {
        resizeMode: "contain",
        alt: clone.attributes.alt,
        src: clone.attributes.src,
        height: ['100'],
    }
    console.log('Image Clone', clone);
    return clone;
}