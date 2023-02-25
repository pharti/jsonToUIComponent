import { buttonGenerator } from "../genericComponents/Button";
import { captionGenerator } from "../genericComponents/Caption";
import { dividerGenerator } from "../genericComponents/Divider";
import { headingGenerator } from "../genericComponents/Heading";
import { imageGenerator } from "../genericComponents/Image";
import { subHeadingGenerator } from "../genericComponents/SubHeading";

export const cardGenerator = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    const defaultCardConfig = {
        type: 'Element',
        tagName: 'card',
        attributes: {
            borderColor: "coolGray.200",
            overflow: "hidden",
            rounded: "lg",
            borderWidth: "1",
            backgroundColor: "white",
            p: '4'
        },
        children: [
            imageGenerator(config),
            dividerGenerator(config),
            headingGenerator(config),
            captionGenerator(config),
            dividerGenerator(config),
            subHeadingGenerator(config),
            dividerGenerator(config),
            buttonGenerator(config),
        ]
    };

    return defaultCardConfig;
}