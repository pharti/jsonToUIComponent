import React from "react";
import { ComponentToCommonTagsMap } from "../constants/mapperConstants";
import { configEngine } from "./ConfigEngine";

const generateElement = (config) => {
    try {
        if (config.content || config.value) {
            if (config?.content && config?.content !== '') {
                return config?.content?.trim();
            } else if (config.value && config.value !== '') {
                return config.value;
            }
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
    try {
        const updatedConfig = configEngine(config);
        if (updatedConfig) {
            //... Create custom component based on type other than Element
            return React.createElement(
                ComponentToCommonTagsMap[updatedConfig.tagName],                //... React component that we want to render
                { ...updatedConfig.attributes },                              //... Attributes, styles, href, source etc
                generateElement(updatedConfig)                             //... Child element goes here.
            );
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