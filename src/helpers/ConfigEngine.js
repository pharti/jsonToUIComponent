import { cardGenerator } from "./compositeComponents/Card";
import { avatarGenerator } from "./genericComponents/Avatar";
import { buttonGenerator } from "./genericComponents/Button";
import { captionGenerator } from "./genericComponents/Caption";
import { containerGenerator } from "./genericComponents/Container";
import { headingGenerator } from "./genericComponents/Heading";
import { iconGenerator } from "./genericComponents/Icon";
import { imageGenerator } from "./genericComponents/Image";
import { subHeadingGenerator } from "./genericComponents/SubHeading";

export const configEngine = (config) => {
    try {
        let updatedConfig;
        switch (config.type) {
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
            default:
                break;
        }

        return updatedConfig;
    } catch (error) {
        console.log('Error: modifyConfig', error);
    }

};
