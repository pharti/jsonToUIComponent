/* eslint-disable prettier/prettier */
import React from "react";
import { Platform } from "react-native";
import { ComponentToCommonTagsWebMap } from "../constants/webMapperConstant";
import { ComponentToCommonTagsMobileMap } from "../constants/mobileMapperContant";
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
        console.log('updatedConfig', updatedConfig);
        if (updatedConfig) {
            //... Create custom component based on type other than Element
            return React.createElement(
                ComponentToCommonTagsWebMap[updatedConfig.tagName],                //... JSX element that we want to render
                { ...updatedConfig.attributes },                              //... Attributes, styles, href, source etc
                generateElement(updatedConfig)                             //... Child element goes here.
            );
        }
    } catch (error) {
        console.log('Error: htmlElementCreator', error);
    }
};

const muiComponent = (config) => {
    try {

        const updatedConfig = configEngine(config);
        console.log('updatedConfig', updatedConfig);
        if (updatedConfig) {
            //... Create custom component based on type other than Element
            return React.createElement(
                ComponentToCommonTagsMobileMap[updatedConfig.tagName],                //... JSX element that we want to render
                { ...updatedConfig.attributes },                              //... Attributes, styles, href, source etc
                generateElement(updatedConfig)                             //... Child element goes here.
            );
        }

    } catch (error) {
        console.log('Error: muiComponent', error);
    }
};

const paperComponent = (config) => {
    try {

        const updatedConfig = configEngine(config);
        console.log('updatedConfig', updatedConfig);
        if (updatedConfig) {
            //... Create custom component based on type other than Element
            return React.createElement(
                ComponentToCommonTagsMap[updatedConfig.tagName],                //... JSX element that we want to render
                { ...updatedConfig.attributes },                              //... Attributes, styles, href, source etc
                generateElement(updatedConfig)                             //... Child element goes here.
            );
        }

    } catch (error) {
        console.log('Error: muiComponent', error);
    }
};

const renderEngine = (rootConfig) => {
    /**
        rootConfig is an object which includes the information
        for creating a UI Element.
    */

    if (Platform.OS === 'android' || Platform.OS === 'ios') {
        return rootConfig?.children?.map(c => paperComponent(c));

    }
    else if (Platform.OS === 'web') {
        return rootConfig?.children?.map(c => muiComponent(c));
    }

};

export default renderEngine;