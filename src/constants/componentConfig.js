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
                    alt: "Alternate Text"
                },
                children: []
            },
            {
                type: 'Element',
                tagName: 'div',
                attributes: { style: { fontSize: 16 } },
                children: [
                    {
                        type: 'Element',
                        tagName: 'p',
                        attributes: { style: { fontSize: 16 } },
                        children: [
                            {
                                type: 'Text',
                                content: 'John Doe'
                            }
                        ]
                    },
                    {
                        type: 'Element',
                        tagName: 'p',
                        attributes: { style: { fontSize: 16 } },
                        children: [
                            {
                                type: 'Text',
                                content: 'Software Engineer'
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
                                content: 'User Details'
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
                        attributes: { mb: "5", defaultValue: "John", placeholder: "First Name", height: 12, style: { backgroundColor: 'white' } },
                        children: []
                    },
                    {
                        type: 'Element',
                        tagName: 'input',
                        attributes: {
                            mb: "5", defaultValue: "Doe", placeholder: "Last Name", height: 12, style: { backgroundColor: 'white' }
                        },
                        children: []
                    },
                    {
                        type: 'Element',
                        tagName: 'input',
                        attributes: { type: "password", defaultValue: "12345", height: 12, placeholder: "password", style: { backgroundColor: 'white' } },
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