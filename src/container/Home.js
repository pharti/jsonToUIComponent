/* eslint-disable prettier/prettier */

import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import RenderEngine from '../helpers/RenderEngine';
import { Link, Button, Text } from 'native-base';
import DOMParser from 'react-native-html-parser';

const html = `
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi lacus, auctor sit amet purus vel,
                    gravida luctus lectus. Aenean rhoncus dapibus enim, sit amet faucibus leo ornare vitae. <br>
                    <b>Bold word</b>
                    </p>
               `;

let config = [];

const renderChildren = (node) => {
    for (var i = 0; i < node.length; i++) {

        const clone = [...config];

        if (node[i].nodeName !== "#text") {
            // console.log("***Node Name**", node[i]);
            console.log("***Length**", node[i]?.childNodes[0]?.nodeValue);
            const c = {
                type: node[i].tagName,
                value: node[i]?.childNodes[0]?.nodeValue,
                styles: {},
                childElement: [],
            };
            clone[config.length - 1].childElement.push(c)
            config = [...clone];
        }
        console.log("config", config);
    }
};


const generateRenderConfig = (parsed) => {
    let children = parsed.childNodes;
    for (var i = 0; i < parsed.childNodes.length; i++) {
        // console.log("***Length**", children.length);
        // console.log("***Node Name**", children[i].nodeName);
        // console.log("***Node Value**", children[i]);
        // console.log("***Children Length**", children[i].childNodes.length);

        const c = {
            type: children[i].tagName,
            value: children[i]?.childNodes[0]?.nodeValue,
            styles: {},
            childElement: [],
        };

        const clone = [...config];
        clone.push(c);
        config = [...clone];

        renderChildren(children[i].childNodes)

        // console.log("config", config);
    }
}



//.... TODO this config will be created base on the html we get from any web link.
const parseHtml = (parsedValue) => {
    // console.log("parsedValue", parsedValue);
    //... If child note exists
    if (parsedValue?.hasChildNodes()) {
        generateRenderConfig(parsedValue);
    }

    return config;
};

const getParsedHTML = (htmlContent) => {

    //1... Get hierarchy of html to create parent child relationship
    const parser = new DOMParser.DOMParser();
    const parsed = parser.parseFromString(htmlContent, 'text/html');
    parseHtml(parsed);

}

getParsedHTML(html);

const renderConfig = [
    //... Simple html base config
    {
        type: "div",
        styles: {
            justifyContent: 'center',
            padding: 16
        },
        childElement: [
            {
                type: "div",
                styles: {
                    padding: 16,
                    backgroundColor: '#fefefe',
                    borderRadius: 16,
                    justifyContent: 'center'
                },
                childElement: [
                    {
                        type: "h2",
                        value: "Bill Russell's unparalleled legacy towers over 2023 Legends Brunch",
                    },
                    {
                        type: "caption",
                        value: "Kareem Abdul-Jabbar, Grant Hill and Julius Erving are among those to pay homage to legendary NBA icon Bill Russell.",
                        styles: {
                            color: '#c0c0c0',
                            paddingBottom: 16
                        },
                    },
                    {
                        type: "p",
                        value: "The loss of Bill Russell, who <b>died July 31</b> at age 88. Malone, 59, gave a tearful speech about family, particularly honoring his and the grandfather who helped raise him. He thanked"
                    },
                    // {
                    //     type: "p",
                    //     styles: {
                    //         paddingTop: 16
                    //     },
                    //     childElement: [
                    //         "The loss of Bill Russell, who died July 31 ",
                    //         //... Span Tag
                    //         {
                    //             type: 'span',
                    //             value: 'who died July 31 ',
                    //             styles: {
                    //                 color: 'red',
                    //             },
                    //         },
                    //         "at age 88. Malone, 59, gave a tearful speech about family, particularly honoring his ",
                    //         //... Italic Text
                    //         {
                    //             type: 'em',
                    //             value: 'mother Shirley ',
                    //             styles: {
                    //                 color: 'green',
                    //             },
                    //         },
                    //         "and the grandfather who helped raise him. He thanked ",
                    //         //... Bold Text
                    //         {
                    //             type: 'b',
                    //             value: 'Erving ',
                    //             styles: {
                    //                 color: 'blue',
                    //             },
                    //         },
                    //         "for inspiring him as a player, mentioning he chose to wear “32” based on the Doctor’s number in his ABA days."
                    //     ],

                    // },
                    // {
                    //     type: "p",
                    //     styles: {
                    //         paddingTop: 16
                    //     },
                    //     value:
                    //         childElement: [
                    //             "Steve Aschburner has written about the NBA since 1980. You can e-mail him here, find",
                    //             {
                    //                 type: 'p',
                    //                 childElement: [
                    //                     {
                    //                         type: 'a',
                    //                         value: ' his archive here ',
                    //                         attributes: {
                    //                             link: "https://www.nba.com/news/legends-brunch-recap-2023-nba-all-star"
                    //                         },
                    //                     },
                    //                 ]
                    //             },
                    //             "and follow him on Twitter."],
                    // },
                ],
            }
        ],
    },
];

const HomeScreen = () => {

    console.log("config", config)
    return (
        <SafeAreaView>
            {config.map(c => RenderEngine(c))}
            {/* <Text mx="16">
                NativeBase is a component library that enables devs to build universal
                design systems. It is built on top of React Native, allowing you to
                develop apps for Android, iOS and the Web.{" "}
                <Link href="https://nativebase.io" _text={{
                    color: "blue.400"
                }} >
                    Read More
                </Link>
            </Text> */}
            {/* <Button onPress={() => console.log("hello world")}>Click Me</Button> */}
        </SafeAreaView >
    );
};

export default HomeScreen;

