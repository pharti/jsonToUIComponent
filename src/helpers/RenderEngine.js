import React from "react";
import { componentConfig } from "../constants/componentConfig";

import { ComponentToFontStyleMap, ComponentToFontSizeMap, ComponentToFontWeightMap, ComponentToCommonTagsMap } from "../constants/mapperConstants";

const generateAttributes = (config) => {

    //... create attributes mapping html tag and native base component styles.
    let attributes = { ...config.attributes };
    if (config.tagName === 'p' || config.tagName === 'h1' || config.tagName === 'h2' || config.tagName === 'h3' || config.tagName === 'h4' || config.tagName === 'h5' || config.tagName === 'h6' || config.tagName === 'small') {
        attributes.fontSize = ComponentToFontSizeMap[config.tagName];
    };
    if (config.tagName === 'i' || config.tagName === 'em') {
        attributes.fontStyle = ComponentToFontStyleMap[config.tagName];
    };
    if (config.tagName === 'b') {
        attributes.fontWeight = ComponentToFontWeightMap[config.tagName];
    };
    if (config.tagName === 'mark') {
        attributes.highlight = true;
    };
    if (config.tagName === 'sub') {
        attributes.sub = true;
    };
    if (config.tagName === 'u' || config.tagName === 'ins') {
        attributes.underline = true;
    };
    if (config.tagName === 'strike' || config.tagName === 'del') {
        attributes.strikeThrough = true;
    };
    if (config.tagName === 'a') {
        attributes.href = config.href;
    };
    if (config.tagName === "img") {

        // attributes.source = { source: config.attributes.source }
    };
    console.log("config.attributes", attributes);

    //...TODO Add default component styles
    attributes.style = config.attributes.style;
    // console.log("attributes", attributes);
    return attributes;
};

const generateElement = (config) => {
    try {
        if (config.content) {
            //...If config has just a single value as string. That is stored in value
            return config.content;
        }
        if (config.children && config?.children?.length > 0) {
            //...If config has a child element which must be an array. That is stored in childElement key
            return config.children.map(c => {
                if (c.type === "Text") {
                    return c.content;
                } else {
                    return htmlElementCreator(c)
                };
            })
        }

    } catch (error) {
        console.log('generateElement error', error)
    }
};

const htmlElementCreator = (config) => {
    try {
        //... If type is any HTML Element or Text
        if (typeof ComponentToCommonTagsMap[config.tagName] !== "undefined" && (config.type === "Element" || config.type === "Text")) {
            return React.createElement(
                ComponentToCommonTagsMap[config.tagName], // React component that we want to render
                generateAttributes(config),
                generateElement(config)
            );
        } else {
            //... Create custom component base on config type
            return React.createElement(
                ComponentToCommonTagsMap[componentConfig[config.type].tagName], // React component that we want to render
                generateAttributes(componentConfig[config.type]),
                generateElement(componentConfig[config.type])
            );
        }
    } catch (error) {
        console.log('error', error);
    }
};

const renderEngine = (rootConfig) => {
    return rootConfig.children.map(c => htmlElementCreator(c));
};

export default renderEngine;