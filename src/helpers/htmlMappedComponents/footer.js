export const getFooterConfig = (config) => {
    let clone = { ...config };
    /*
        Section is basically a grouping of heading and text content,
        which separates the content from other content using spacing. 
    */
    clone.attributes = { ...clone.attributes, py: "2" }
    return clone;
}