import React from "react";

import { ComponentToFontStyleMap, ComponentToFontSizeMap, ComponentToFontWeightMap, ComponentToCommonTagsMap } from "../constants/mapperConstants";

const generateAttributes = (config) => {

    //... create attributes mapping html tag and native base component styles.
    let attributes = { ...config.attributes };
    if (config.type === 'p' || config.type === 'h1' || config.type === 'h2' || config.type === 'h3' || config.type === 'h4' || config.type === 'h5' || config.type === 'h6' || config.type === 'small') {
        attributes.fontSize = ComponentToFontSizeMap[config.type];
    };
    if (config.type === 'i' || config.type === 'em') {
        attributes.fontStyle = ComponentToFontStyleMap[config.type];
    };
    if (config.type === 'b') {
        attributes.fontWeight = ComponentToFontWeightMap[config.type];
    };
    if (config.type === 'mark') {
        attributes.highlight = true;
    };
    if (config.type === 'sub') {
        attributes.sub = true;
    };
    if (config.type === 'u' || config.type === 'ins') {
        attributes.underline = true;
    };
    if (config.type === 'strike' || config.type === 'del') {
        attributes.strikeThrough = true;
    };
    if (config.type === 'a') {
        console.log("config", config);
        attributes.link = config.attributes.href;
    };

    //...TODO Add default component styles
    attributes.style = config.styles;
    // console.log("attributes", attributes);
    return attributes;
};

const generateElement = (config) => {
    if (config.value) {
        //...If config has just a single value as string. That is stored in value
        return config.value;
    }
    if (config.childElement && config?.childElement?.length > 0) {
        //...If config has a child element which must be an array. That is stored in childElement key
        return config.childElement.map(c => {
            if (typeof c === 'string') {
                return c;
            };
            return htmlElementCreator(c)
        })
    }
};


const htmlElementCreator = (config) => {
    // console.log("config", config);
    if (typeof ComponentToCommonTagsMap[config.type] !== "undefined") {
        return React.createElement(
            ComponentToCommonTagsMap[config.type], // React component that we want to render
            generateAttributes(config),
            generateElement(config)
        );
    }
}

export default htmlElementCreator;