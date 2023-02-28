import { ComponentToFontSizeMap } from "../../constants/mapperConstants";

export const getH2Config = (config) => {
    let clone = { ...config };
    clone.attributes.fontSize = ComponentToFontSizeMap[config.tagName];
    return clone;
}