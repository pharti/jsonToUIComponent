import { ComponentToFontSizeMap } from "../../constants/mapperConstants";

export const getTimeConfig = (config) => {
    let clone = { ...config };
    clone.attributes.fontSize = ComponentToFontSizeMap[config.tagName];
    return clone;
}