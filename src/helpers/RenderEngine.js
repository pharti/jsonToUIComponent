import React from "react";
import { Stack, Box, Text, Center, Link } from 'native-base'

const KeysToComponentMap = {
    p: Text,
    h1: Text,
    h2: Text,
    h3: Text,
    h4: Text,
    h5: Text,
    h6: Text,
    b: Text,
    span: Text,
    caption: Text,
    i: Text,
    em: Text,
    b: Text,
    a: Link,
    div: Box,
};

const ComponentToFontSizeMap = {
    caption: 'sm',
    p: 'md',
    h1: 'xl',
    h2: '2xl',
    h3: '3xl',
    h4: '4xl',
    h5: '5xl',
    h6: '6xl',
};

const ComponentToFontDecorationMap = {
    i: 'italic',
    em: 'italic'
};

const ComponentToFontWeightMap = {
    b: 'bold',

    ins: 'underline',
    del: 'strikeThrough',
    mark: 'highlight',
    sub: 'sub',
};

const generateAttributes = (config) => {

    //... create attributes mapping html tag and native base component styles.
    let attributes = { ...config.attributes };
    if (config.type === 'p' || config.type === 'h1' || config.type === 'h2' || config.type === 'h3' || config.type === 'h4' || config.type === 'h5' || config.type === 'h6') {
        attributes.fontSize = ComponentToFontSizeMap[config.type];
    };
    if (config.type === 'i' || config.type === 'em') {
        attributes.fontStyle = ComponentToFontDecorationMap[config.type];
    };
    if (config.type === 'b' || config.type === 'ins' || config.type === 'del' || config.type === 'mark' || config.type === 'sub') {
        attributes.fontWeight = ComponentToFontWeightMap[config.type];
    };
    if (config.type === 'a') {
        attributes.href = config.attributes.link;
    };

    //...TODO Add default component styles
    attributes.style = config.styles;
    console.log("attributes", attributes);
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
    console.log("config", config);
    if (typeof KeysToComponentMap[config.type] !== "undefined") {
        return React.createElement(
            KeysToComponentMap[config.type], // React component that we want to render
            generateAttributes(config),
            generateElement(config)
        );
    }
}

export default htmlElementCreator;