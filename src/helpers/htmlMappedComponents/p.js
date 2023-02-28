import { ComponentToFontSizeMap } from "../../constants/mapperConstants";

export const getPConfig = (config) => {
    let clone = { ...config };
    clone.attributes.fontSize = ComponentToFontSizeMap[config.tagName];
    return clone;
}