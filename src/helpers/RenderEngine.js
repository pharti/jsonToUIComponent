/* eslint-disable prettier/prettier */
import React from "react";
import { ComponentToCommonTagsMap, ComponentToFontSizeMap, ComponentToFontStyleMap, ComponentToFontWeightMap } from "../constants/mapperConstants";
import { cardGenerator } from "./compositeComponents/Card";
import { avatarGenerator } from "./genericComponents/Avatar";
import { buttonGenerator } from "./genericComponents/Button";
import { captionGenerator } from "./genericComponents/Caption";
import { containerGenerator } from "./genericComponents/Container";
import { formGenerator } from "./genericComponents/Form";
import { headingGenerator } from "./genericComponents/Heading";
import { iconGenerator } from "./genericComponents/Icon";
import { imageGenerator } from "./genericComponents/Image";
import { inputTextGenerator } from "./genericComponents/InputText";
import { stackGenerator } from "./genericComponents/StackContainer";
import { subHeadingGenerator } from "./genericComponents/SubHeading";


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

    //...TODO Add default component styles
    attributes.style = config?.attributes?.style;

    console.log('attributes ===> ', attributes);

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
        console.log('Error: generateElement', error);
    }
};


const modifyConfig = (config) => {
    try {
        let updatedConfig;
        switch (config.type) {
            case 'Form':
                updatedConfig = formGenerator(config);
                break;
            case 'Button':
                updatedConfig = buttonGenerator(config);
                break;
            case 'Heading':
                updatedConfig = headingGenerator(config);
                break;
            case 'SubHeading':
                updatedConfig = subHeadingGenerator(config);
                break;
            case 'Caption':
                updatedConfig = captionGenerator(config);
                break;
            case 'Container':
                updatedConfig = containerGenerator(config);
                break;
            case 'Image':
                updatedConfig = imageGenerator(config);
                break;
            case 'Avatar':
                updatedConfig = avatarGenerator(config);
                break;
            case 'Icon':
                updatedConfig = iconGenerator(config);
                break;

            case 'Card':
                updatedConfig = cardGenerator(config);
                break;
            case 'inputText':
                updatedConfig = inputTextGenerator(config);
                break;
            case 'Stack':
                updatedConfig = stackGenerator(config);
                break;
            // case 'Checkbox':
            //     updatedConfig = checkboxGenerator(config);
            //     break;
            default:
                break;
        }

        return updatedConfig;
    } catch (error) {
        console.log('Error: modifyConfig', error);
    }

}

const htmlElementCreator = (config) => {
    try {
        //... If type is any HTML Element or Text
        if ((config.type === "Element" || config.type === "Text") && typeof ComponentToCommonTagsMap[config.tagName] !== "undefined") {
            return React.createElement(
                ComponentToCommonTagsMap[config.tagName],                       //... React component that we want to render
                generateAttributes(config),                                     //... Attributes, styles, href, source etc
                generateElement(config)                                         //... Child element goes here.
            );
        } else {
            /**
            Modify config based on users input and requirement. Below function
            accepts the config, adds the props(For form, inputFields, overriding styles, button title etc),
            returns a updated config to render.
        */

            console.log("Element")
            const updatedConfig = modifyConfig(config);

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