/* eslint-disable prettier/prettier */
import DOMParser from 'react-native-html-parser';

let config = [];
const generateRenderConfig = (node) => {
    //... Get hierarchy of html to create parent child relationship
    for (var i = 0; i < node.length; i++) {
        if (node[i].nodeName !== "#text") {
            console.log("***Length**", node.length);
            console.log("***Node Value**", node[i]);
            console.log("***Node Name**", node[i].nodeName);
            console.log("***Child Node Length**", node[i].childNodes.length);
            console.log("***Attributes**", node[i].attributes.length);
            let c = {
                type: node[i]?.tagName,
                value: node[i]?.childNodes[0]?.nodeValue,
                styles: {},
                childElement: [],
            };

            //... Get element attributes
            // for (var i = 0; i < node[i]?.attributes?.length; i++) {
            //     console.log(' c[node[i].attributes[i].name]', node[i].attributes[i].name);
            //     console.log('node[i]?.attributes[i]?.value', node[i]?.attributes[i]?.value);
            //     c[node[i].attributes[i].name] = node[i]?.attributes[i]?.value;
            // }

            const clone = [...config];
            clone.push(c);
            config = [...clone];

            generateRenderConfig(node[i].childNodes)
        }
    }
}

export const parseHtml = (html) => {

    const parser = new DOMParser.DOMParser();
    const parsed = parser.parseFromString(html, 'text/html');
    //... If child note exists
    if (parsed?.hasChildNodes()) {
        generateRenderConfig(parsed.childNodes);
    }

    return config;
};
