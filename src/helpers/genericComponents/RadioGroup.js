/* eslint-disable prettier/prettier */
import { radioButtonGenerator } from "./RadioButton";

/* eslint-disable prettier/prettier */
export const radioGroupGenerator = (config) => {

    const defaultRadioGroupConfig = {
        type: 'Element',
        tagName: 'RadioGroup',
        attributes: {
            size: 'md',
            value:'One',
            onPress: (value) => config.onRadioButtonChanged(value),
            isDisabled: config.isDisabled,
        },
        children: [
            {
                type: 'Element',
                tagName: 'RadioButton',
                attributes: {
                    size: 'md',
                    selected:'One',
                    my: `${config.margingVertical ? config.margingVertical : '1'}`,
                },
                children: [
                    {
                        type: 'Element',
                        tagName: 'h1',
                        attributes: {},
                        children: [
                            {
                                type: 'Text',
                                content: 'RadioButton 1',
                            },
                        ],
                    },
                ],
            },
            {
                type: 'Element',
                tagName: 'RadioButton',
                attributes: {
                    size: 'md',
                    selected:'Two',
                    my: `${config.margingVertical ? config.margingVertical : '1'}`,
                },
                children: [
                    {
                        type: 'Element',
                        tagName: 'h1',
                        attributes: {},
                        children: [
                            {
                                type: 'Text',
                                content: 'RadioButton 2',
                            },
                        ],
                    },
                ],
            },
        ],
    };

    //... config parameter is used when the default configuration are needed to override
    return defaultRadioGroupConfig;
}