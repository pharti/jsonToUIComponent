/* eslint-disable prettier/prettier */
export const checkBoxGenerator = (config) => {

    const defaultInputTextConfig = {
        type: 'Element',
        tagName: 'checkboxGroup',
        attributes: {
            size: 'md',
            startIcon: '',
            isDisabled: config.isDisabled,
            onChange: (value) => config.onChecked(value),
            py: `${config.paddingVertical ? config.paddingVertical : '1'}`,
        },
        children: [
            {
                type: 'Element',
                tagName: 'Checkbox',
                attributes: {
                    size: 'md',
                    value: `${config.value ? config.value : 'One'}`,
                    defaultIsChecked: `${config.defaultIsChecked ? config.defaultIsChecked : true}`,
                    isDisabled: config.isDisabled,
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
                                content: 'Checkbox 1',
                            },
                        ],
                    },],
            },
            {
                type: 'Element',
                tagName: 'Checkbox',
                attributes: {
                    size: 'md',
                    value: `${config.value ? config.value : 'Two'}`,
                    defaultIsChecked: `${config.defaultIsChecked ? config.defaultIsChecked : true}`,
                    isDisabled: config.isDisabled,
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
                                content: 'Checkbox 1',
                            },
                        ],
                    },],

            },
        ],
    };

    //... config parameter is used when the default configuration are needed to override
    return defaultInputTextConfig;
}