import { avatarGenerator } from "./genericComponents/Avatar";
import { buttonGenerator } from "./genericComponents/Button";
import { captionGenerator } from "./genericComponents/Caption";
import { containerGenerator } from "./genericComponents/Container";
import { headingGenerator } from "./genericComponents/Heading";
import { iconGenerator } from "./genericComponents/Icon";
import { imageGenerator } from "./genericComponents/Image";
import { subHeadingGenerator } from "./genericComponents/SubHeading";

import { getLinkConfig } from "./htmlMappedComponents/a";
import { getArticleConfig } from "./htmlMappedComponents/article";
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
import { getImgConfig } from "./htmlMappedComponents/img";
import { getPConfig } from "./htmlMappedComponents/p";
import { getSectionConfig } from "./htmlMappedComponents/section";
import { getSpanConfig } from "./htmlMappedComponents/span";
import { getStrongConfig } from "./htmlMappedComponents/strong";
import { getTimeConfig } from "./htmlMappedComponents/time";

export const configEngine = (config) => {
    try {
        let updatedConfig;
        //... parser gives tagName and User config type.
        let type = config.tagName || config.type;
        switch (type) {
            case 'text':
                updatedConfig = config;
                break;
            case 'element':
                updatedConfig = config;
                break;
            case 'button':
                updatedConfig = buttonGenerator(config);
                break;
            case 'heading':
                updatedConfig = headingGenerator(config);
                break;
            case 'subHeading':
                updatedConfig = subHeadingGenerator(config);
                break;
            case 'caption':
                updatedConfig = captionGenerator(config);
                break;
            case 'container':
                updatedConfig = containerGenerator(config);
                break;
            case 'image':
                updatedConfig = imageGenerator(config);
                break;
            case 'avatar':
                updatedConfig = avatarGenerator(config);
                break;
            case 'icon':
                updatedConfig = iconGenerator(config);
                break;

            case 'div':
                updatedConfig = getDivConfig(config);
                break;
            case 'h1':
                updatedConfig = getH1Config(config);
                break;
            case 'h2':
                console.log('h2');
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
                updatedConfig = getPConfig(config);
                break;
            case 'a':
                updatedConfig = getLinkConfig(config);
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
            default:
                console.log("***Default**")
                return updatedConfig;
        }
        return updatedConfig;
    } catch (error) {
        console.log('Error: modifyConfig', error);
    }

};


// export default configEngine;