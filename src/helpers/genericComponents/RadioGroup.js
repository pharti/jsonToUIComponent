/* eslint-disable prettier/prettier */

export const radioGroupGenerator = (config) => {

    const defaultRadioGroupConfig = {
        type: 'Element',
        tagName: 'RadioGroup',
        attributes: {
            size: 'md',
            defaultValue:'1',
            onChange: (value) => config.onRadioButtonChanged(value),
            isDisabled: config.isDisabled,
        },
        children: [
            {
                type: 'Element',
                tagName: 'RadioButton',
                attributes: {
                    size: 'md',
                    value:'1',
                    colorScheme:"blue",
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
                    value:'2',
                    colorScheme:"blue",
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