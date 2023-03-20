/* eslint-disable prettier/prettier */
import { avatarGenerator } from "./genericComponents/Avatar";
import { captionGenerator } from "./genericComponents/Caption";
import { carouselGenerator } from "./genericComponents/Carousel";
import { checkBoxGenerator } from "./genericComponents/CheckBox";
import { headingGenerator } from "./genericComponents/Heading";
import { iconGenerator } from "./genericComponents/Icon";
import { modalGenerator } from "./genericComponents/Modal";
import { modalContentGenerator } from "./genericComponents/ModalContent";
import { modalHeaderGenerator } from "./genericComponents/ModalHeader";
import { radioButtonGenerator } from "./genericComponents/RadioButton";
import { radioGroupGenerator } from "./genericComponents/RadioGroup";
import { stackGenerator } from "./genericComponents/StackContainer";
import { subHeadingGenerator } from "./genericComponents/SubHeading";

import { getLinkConfig } from "./htmlMappedComponents/a";
import { getArticleConfig } from "./htmlMappedComponents/article";
import { getButtonConfig } from "./htmlMappedComponents/button";
// import { getCheckBoxConfig } from "./htmlMappedComponents/checkbox";
import { getDivConfig } from "./htmlMappedComponents/div";
import { getFigureConfig } from "./htmlMappedComponents/figure";
import { getFooterConfig } from "./htmlMappedComponents/footer";
import { getH1Config } from "./htmlMappedComponents/h1";
import { getH2Config } from "./htmlMappedComponents/h2";
import { getH3Config } from "./htmlMappedComponents/h3";
import { getH4Config } from "./htmlMappedComponents/h4";
import { getH5Config } from "./htmlMappedComponents/h5";
import { getH6Config } from "./htmlMappedComponents/h6";
import { getHeaderConfig } from "./htmlMappedComponents/header";
import { getIconConfig } from "./htmlMappedComponents/icon";
import { getImgConfig } from "./htmlMappedComponents/img";
import { getInputConfig } from "./htmlMappedComponents/input";
import { getPConfig } from "./htmlMappedComponents/p";
import { getSectionConfig } from "./htmlMappedComponents/section";
import { getSpanConfig } from "./htmlMappedComponents/span";
import { getStrongConfig } from "./htmlMappedComponents/strong";
import { getTimeConfig } from "./htmlMappedComponents/time";

export const configEngine = (config) => {
    console.log("config--->", config);
    try {
        let updatedConfig;
        //... parser gives tagName and User config type.
        let type = config?.tagName || config?.type;
        switch (type) {
            case 'heading':
                updatedConfig = headingGenerator(config);
                break;
            case 'subHeading':
                updatedConfig = subHeadingGenerator(config);
                break;
            case 'caption':
                updatedConfig = captionGenerator(config);
                break;
            case 'avatar':
                updatedConfig = avatarGenerator(config);
                break;
            case 'icon':
                updatedConfig = iconGenerator(config);
                break;
            case 'checkBox':
                updatedConfig = checkBoxGenerator(config);
                break;
            case 'radioButton':
                updatedConfig = radioButtonGenerator(config);
                break;
            case 'radioGroup':
                updatedConfig = radioGroupGenerator(config);
                break;
            case 'carousel':
                updatedConfig = carouselGenerator(config);
                break;
            case 'modal':
                updatedConfig = modalGenerator(config);
                break;
            // case 'modalContent':
            //     updatedConfig = modalContentGenerator(config);
            //     break;
            // case 'modalHeder':
            //     updatedConfig = modalHeaderGenerator(config);
            //     break;
            //HTML TAGS
            case 'div':
                updatedConfig = getDivConfig(config);
                break;
            case 'h1':
                updatedConfig = getH1Config(config);
                break;
            case 'h2':
                updatedConfig = getH2Config(config);
                break;
            case 'h3':
                updatedConfig = getH3Config(config);
                break;
            case 'h4':
                updatedConfig = getH4Config(config);
                break;
            case 'h5':
                updatedConfig = getH5Config(config);
                break;
            case 'h6':
                updatedConfig = getH6Config(config);
                break;
            case 'p':
                //... If the value consist of html tags. Than parse and get the config to iterate over all the tags.
                //... DO NOT REMOVE
                // const findHtmlTagRegex = /<\/?[a-z][\s\S]*>/g;
                // const found = config.value.match(findHtmlTagRegex);
                // if (found && found.length > 0) {
                //     parseHtml(config.value).then(result => {
                //         console.log("1", result);
                //         updatedConfig = getPConfig(config, result.children);
                //         console.log('4', updatedConfig);
                //         return updatedConfig;
                //     });
                // }
                updatedConfig = getPConfig(config);
                break;
            case 'a':
                updatedConfig = getLinkConfig(config);
                break;
            case 'i':
                updatedConfig = getIconConfig(config);
                break;
            case 'section':
                updatedConfig = getSectionConfig(config);
                break;
            case 'strong':
                updatedConfig = getStrongConfig(config);
                break;
            case 'footer':
                updatedConfig = getFooterConfig(config);
                break;
            case 'time':
                updatedConfig = getTimeConfig(config);
                break;
            case 'figure':
                updatedConfig = getFigureConfig(config);
                break;
            case 'img':
                updatedConfig = getImgConfig(config);
                break;
            case 'article':
                updatedConfig = getArticleConfig(config);
                break;
            case 'header':
                updatedConfig = getHeaderConfig(config);
                break;
            case 'span':
                updatedConfig = getSpanConfig(config);
                break;
            case 'input':
                updatedConfig = getInputConfig(config);
                break;
            // case 'checkbox':
            //     updatedConfig = getCheckBoxConfig(config);
            //     break;
            case 'button':
                updatedConfig = getButtonConfig(config);
            default:
                console.log("***Default**")
                return updatedConfig;
        }
        return updatedConfig;
    } catch (error) {
        console.log('Error: modifyConfig', error);
    }

};
