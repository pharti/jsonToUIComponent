import React from "react";
import { ComponentToCommonTagsMap, ComponentToFontSizeMap, ComponentToFontStyleMap, ComponentToFontWeightMap } from "../constants/mapperConstants";
import { configEngine } from "./ConfigEngine";
import { getLinkConfig } from "./htmlMappedComponents/a";
import { getArticleConfig } from "./htmlMappedComponents/article";
import { getFigureConfig } from "./htmlMappedComponents/figure";
import { getFooterConfig } from "./htmlMappedComponents/footer";
import { getH2Config } from "./htmlMappedComponents/h2";
import { getHeaderConfig } from "./htmlMappedComponents/header";
import { getImgConfig } from "./htmlMappedComponents/img";
import { getPConfig } from "./htmlMappedComponents/p";
import { getSectionConfig } from "./htmlMappedComponents/section";
import { getStrongConfig } from "./htmlMappedComponents/strong";
import { getTimeConfig } from "./htmlMappedComponents/time";

const generateAttributes = (config) => {

    //... create attributes mapping html tag and native base component styles.
    let attributes = { ...config.attributes };
    switch (config.tagName) {
        // case ('p'):
        case ('h1'):
        // case ('h2'):
        case ('h3'):
        case ('h4'):
        case ('h5'):
        case ('h6'):
        case ('small'):
            attributes.fontSize = ComponentToFontSizeMap[config.tagName];
            // attributes.bg = "green.400"
            break;
        case ('i'):
        case ('em'):
            attributes.fontStyle = ComponentToFontStyleMap[config.tagName];
            break;
        case ('b'):
            attributes.fontWeight = ComponentToFontWeightMap[config.tagName];
            break;
        case ('mark'):
            attributes.highlight = true;
            break;
        case ('sub'):
            attributes.sub = true;
            break;
        case ('u'):
        case ('ins'):
            attributes.underline = true;
            break;
        case ('strike'):
        case ('del'):
            attributes.strikeThrough = true;
            break;
        // case ('a'):
        //     attributes.href = config.href;
        //     break;
        // case ('img'):
        //     attributes.resizeMode = "contain";
        //     break;
        // case ('section'):
        // attributes.bg = "red.400"
        // break;
        default:
            break;
    }
    // console.log('attributes', attributes);
    //...TODO Add default component styles
    attributes.style = config?.attributes?.style;
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
                    //... Remove any extra spaces from the string.
                    return c.content.replace(/\s+/g, ' ').trim();
                } else {
                    return htmlElementCreator(c)
                };
            })
        }

    } catch (error) {
        console.log('Error: generateElement', error);
    }
};


const htmlElementCreator = (config) => {
    let c = config;
    try {
        //... If type is any HTML Element or Text
        if ((c.type === "Element" || c.type === "Text") && typeof ComponentToCommonTagsMap[c.tagName] !== "undefined") {
            if (c.tagName === 'h2') {
                //... get header c
                // console.log('c', c);
                c = getH2Config(config);
            }
            if (c.tagName === 'p') {
                //... get header c
                // console.log('c', c);
                c = getPConfig(config);
            }
            if (c.tagName === 'a') {
                //... get header c
                // console.log('c', c);
                c = getLinkConfig(config);
            }
            if (c.tagName === 'section') {
                //... get header c
                // console.log('c', c);
                c = getSectionConfig(config);
            }
            if (c.tagName === 'strong') {
                //... get header c
                // console.log('c', c);
                c = getStrongConfig(config);
            }
            if (c.tagName === 'footer') {
                //... get header c
                // console.log('c', c);
                c = getFooterConfig(config);
            }
            if (c.tagName === 'time') {
                //... get header c
                // console.log('c', c);
                c = getTimeConfig(config);
                console.log("ccc", c);
            }
            if (c.tagName === 'figure') {
                //... get header c
                // console.log('c', c);
                c = getFigureConfig(config);
            }
            if (c.tagName === 'img') {
                //... get header c
                // console.log('c', c);
                c = getImgConfig(config);
            }
            if (c.tagName === 'article') {
                //... get header c
                // console.log('c', c);
                c = getArticleConfig(config);
            }
            if (c.tagName === 'header') {
                //... get header c
                // console.log('c', c);
                c = getHeaderConfig(config);
            }
            return React.createElement(
                ComponentToCommonTagsMap[c.tagName],                       //... React component that we want to render
                generateAttributes(c),                                     //... Attributes, styles, href, source etc
                generateElement(c)                                         //... Child element goes here.
            );
        } else {
            /**
            Modify c based on users input and requirement. Below function
            accepts the c, adds the props(For form, inputFields, overriding styles, button title etc),
            returns a updated c to render.
        */
            const updatedConfig = configEngine(c);
            if (updatedConfig) {
                //... Create custom component based on type other than Element
                return React.createElement(
                    ComponentToCommonTagsMap[updatedConfig.tagName],                //... React component that we want to render
                    generateAttributes(updatedConfig),                              //... Attributes, styles, href, source etc
                    generateElement(updatedConfig)                                  //... Child element goes here.
                );
            }
        }
    } catch (error) {
        console.log('Error: htmlElementCreator', error);
    }
};

const renderEngine = (rootConfig) => {
    /**
        rootConfig is an object which includes the information 
        for creating a UI Element.
    */
    return rootConfig?.children?.map(c => htmlElementCreator(c));
};

export default renderEngine;