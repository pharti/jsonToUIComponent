/* eslint-disable prettier/prettier */
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { parseHtml } from '../helpers/ParserEngine';
import RenderEngine from '../helpers/RenderEngine';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
    const testHTML = `<div style='height:10px;width: 20px;'>1 <p>2<br/> <h1> Heading... </h1> <a href='http://www.baidu.com'>3</a> </p> <p>2</p> <a href="https://www.google.com">Google</a> <h1 > Heading... </h1> <h2> Heading... </h2> <h3> Heading... </h3> <h4> Heading... </h4> <h5> Heading... </h5> <h6> Heading... </h6> <span> span </span> <b>Bold word</b> <i>italic</i> <em>emphasis</em> <mark>mark</mark> <small>small</small> <sub> sub </sub> <sup> sup </sup> <u> Statements... </u> <abbr title="National Aeronautics and Space Administration">NASA</abbr> <strike> strikethrough </strike> <span><del> deprecated info </del> <ins> new info </ins> </span> <s> not relevant </s> <time datetime="2020-08-17 08:00">Monday at 8:00 AM</time> <br> <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>CANC</kbd> </div>`;
    const testConfig = {
        children: [
            // {
            //     type: 'Heading',
            // },
            // {
            //     type: 'SubHeading',
            // },
            // {
            //     type: 'Caption',
            // },
            // {
            //     type: 'Container',
            // },
            // {
            //     type: 'Image',
            //     source: 'https://wallpaperaccess.com/full/317501.jpg'
            // },
            // {
            //     type: 'Card',
            //     source: 'https://wallpaperaccess.com/full/317501.jpg',
            //     imageWidth: '100%',
            //     headingText: "The Garden City",
            //     captionText: "The Silicon Valley of India.",
            //     subHeadingText: "Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.",
            //     paddingVertical: '2',
            //     buttonText: 'Explore',
            //     onPressButton: () => alert('Button Pressed')
            // },
            // {
            //     type: 'Avatar',
            //     source: 'https://bit.ly/broken-link',
            // },
            // {
            //     type: 'Icon',
            //     name: "web",
            //     as: Icon
            // },
            {
                type: 'Stack',
                paddingVertical: '5',
                margingVertical: 1,
                onTextChange: (text) => console.log('text ==> ', text),
                onRadioButtonChanged: (value) => console.log('value ==> ', value),
                onChecked: (value) => console.log('check value ==> ', value),
            },
        ]
    };

    const [HTMLConfigObject, setHTMLConfigObject] = React.useState({});

    const getConfig = async () => {
        let configObject = await parseHtml(testHTML);
        setHTMLConfigObject(configObject);
    };

    React.useEffect(() => {
        getConfig();
    }, [testHTML])

    return (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
            {testConfig && RenderEngine(testConfig)}
        </SafeAreaView >
    );
};

export default HomeScreen;

