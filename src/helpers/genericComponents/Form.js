export const formGenerator = (config) => {
    const defaultFormConfig = {
        type: 'Element',
        tagName: 'div',
        attributes: { m: '4' },
        children: [
            {
                type: 'Element',
                tagName: 'form',
                attributes: { px: "4", py: '4', rounded: "lg", backgroundColor: "gray.200" },
                children: [
                    {
                        type: 'Element',
                        tagName: 'h1',
                        attributes: {},
                        children: [
                            {
                                type: 'Text',
                                content: 'Login Form'
                            }
                        ]
                    },
                    {
                        type: 'Element',
                        tagName: 'caption',
                        attributes: { pb: '4', color: 'gray.500' },
                        children: [
                            {
                                type: 'Text',
                                content: 'Input user details',
                            }
                        ]
                    },
                    {
                        type: 'Element',
                        tagName: 'input',
                        attributes: {
                            mb: "4", placeholder: "User Name", height: 12, style: { backgroundColor: 'white' }
                        },
                        children: []
                    },
                    {
                        type: 'Element',
                        tagName: 'input',
                        attributes: { type: "Password", height: 12, placeholder: "password", style: { backgroundColor: 'white' } },
                        children: []
                    },
                    {
                        type: 'Element',
                        tagName: 'button',
                        attributes: { mt: '4', height: 12, name: "Click" },
                        children: [{
                            type: 'Element',
                            tagName: 'p',
                            attributes: { color: 'white' },
                            children: [
                                {
                                    type: 'Text',
                                    content: `${config.buttonText ? config.buttonText : 'Submit'}`
                                }
                            ]
                        },]
                    },
                ]
            }
        ]
    };

    return defaultFormConfig;
}