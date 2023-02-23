/* eslint-disable prettier/prettier */

import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { parseHtml } from '../helpers/ParserEngine';
import RenderEngine from '../helpers/RenderEngine';


const HomeScreen = () => {
    const testHTML = `<div style='height:10px;width: 20px;'>1 <p>2<br/> <h1> Heading... </h1> <a href='http://www.baidu.com'>3</a> </p> <p>2</p> <a href="https://www.google.com">Google</a> <h1 > Heading... </h1> <h2> Heading... </h2> <h3> Heading... </h3> <h4> Heading... </h4> <h5> Heading... </h5> <h6> Heading... </h6> <span> span </span> <b>Bold word</b> <i>italic</i> <em>emphasis</em> <mark>mark</mark> <small>small</small> <sub> sub </sub> <sup> sup </sup> <u> Statements... </u> <abbr title="National Aeronautics and Space Administration">NASA</abbr> <strike> strikethrough </strike> <span><del> deprecated info </del> <ins> new info </ins> </span> <s> not relevant </s> <time datetime="2020-08-17 08:00">Monday at 8:00 AM</time> <br> <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>CANC</kbd> </div>`;
    const testConfig = {
        children: [
            {
                type: 'Header',
            },
            {
                type: 'Card',
            },
            {
                type: 'Form',
                // inputFields: {
                //     fname: {
                //         placeholder: "FirstName"
                //     },
                //     lname: {
                //         placeholder: "LastName"
                //     }
                // }
            }
        ]
    };

    const [HTMLConfigObject, setHTMLConfigObject] = React.useState({});

    const getConfig = async () => {

        let configObject = await parseHtml(testHTML);
        setHTMLConfigObject(configObject);
    };

    React.useEffect(() => {
        // getConfig();
    }, [testHTML])

    return (
        <SafeAreaView>
            {testConfig && RenderEngine(testConfig)}
        </SafeAreaView >
    );
};

export default HomeScreen;

