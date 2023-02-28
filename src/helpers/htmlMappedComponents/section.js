export const getSectionConfig = (config) => {
    let clone = { ...config };
    /*
        Section is basically a grouping of heading and text content,
        which separates the content from other content using spacing. 
    */
    clone.attributes = { ...clone.attributes, }
    // clone.attributes.bg = 'emerald.400'
    console.log('clone', clone);
    return clone;
}