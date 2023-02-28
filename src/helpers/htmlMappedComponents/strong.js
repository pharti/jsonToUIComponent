import { ComponentToFontWeightMap } from "../../constants/mapperConstants";

export const getStrongConfig = (config) => {
    let clone = { ...config };
    /*
        Section is basically a grouping of heading and text content,
        which separates the content from other content using spacing. 
    */
    clone.attributes = { ...clone.attributes }
    clone.attributes.fontWeight = ComponentToFontWeightMap[config.tagName];
    return clone;
}