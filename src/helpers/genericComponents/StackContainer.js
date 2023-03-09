/* eslint-disable prettier/prettier */
import { radioGroupGenerator } from "./RadioGroup";

export const stackGenerator = (config) => {
    const defaultStackConfig = {
        type: 'Element',
        tagName: 'Stack',
        attributes: { m: '4', direction: 'column' },
        children: [
            {
                type: 'Element',
                tagName: 'Stack',
                attributes: { px: "4", py: '4', rounded: "lg", backgroundColor: "gray.200" },
                children: [
                    radioGroupGenerator(config),
                ],
            },
        ],
    };
    console.log('defaultStackConfig', defaultStackConfig);
    return defaultStackConfig;
}