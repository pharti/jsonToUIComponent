export const componentConfig = {
    'Header': {
        type: 'Element',
        tagName: 'div',
        attributes: { p: "2", backgroundColor: "gray.300" },
        children: [
            {
                type: 'Element',
                tagName: 'h1',
                attributes: { alignSelf: "center", },
                children: [
                    {
                        type: 'Text',
                        content: 'This is Header'
                    }
                ]
            }
        ]
    },
    'Card': {
        type: 'Element',
        tagName: 'div',
        attributes: { m: "3", p: '4', rounded: "lg", backgroundColor: "gray.300" },
        children: [
            {
                type: 'Element',
                tagName: 'img',
                attributes: {
                    source: { uri: "https://wallpaperaccess.com/full/317501.jpg" },
                    alt: "Alternate Text",
                    style: { height: 200, width: 'auto', borderRadius: 8 }
                },
                children: []
            },
            {
                type: 'Element',
                tagName: 'div',
                attributes: { style: {} },
                children: [
                    {
                        type: 'Element',
                        tagName: 'h1',
                        attributes: { pt: '4', style: {} },
                        children: [
                            {
                                type: 'Text',
                                content: 'John Doe'
                            }
                        ]
                    },
                    {
                        type: 'Element',
                        tagName: 'caption',
                        attributes: { color: 'gray.500' },
                        children: [
                            {
                                type: 'Text',
                                content: 'Software Engineer'
                            }
                        ]
                    },
                    {
                        type: 'Element',
                        tagName: 'caption',
                        attributes: { style: {} },
                        children: [
                            {
                                type: 'Text',
                                content: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'Form': {
        type: 'Element',
        tagName: 'div',
        attributes: { m: '3' },
        children: [
            {
                type: 'Element',
                tagName: 'form',
                attributes: { p: "4", rounded: "lg", backgroundColor: "gray.200" },
                children: [
                    {
                        type: 'Element',
                        tagName: 'h1',
                        attributes: { pt: '4' },
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
                        attributes: { mt: '8', height: 12, name: "Click" },
                        children: []
                    },
                ]
            }
        ]
    }

};