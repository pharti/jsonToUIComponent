/* eslint-disable prettier/prettier */

import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { parseHtml } from '../helpers/ParserEngine';
import RenderEngine from '../helpers/RenderEngine';

const testHTML = `
    <div>
        <h1> Heading... </h1>
        <h2> Heading... </h2>
        <h3> Heading... </h3>
        <h4> Heading... </h4>
        <h5> Heading... </h5>
        <h6> Heading... </h6>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi lacus, auctor sit amet purus vel,
            gravida luctus lectus. Aenean rhoncus dapibus enim, sit amet faucibus leo ornare vitae. <br>
            <span> span </span>
            <b>Bold word</b>
            <i>italic</i>
            <em>emphasis</em>
            <mark>mark</mark>
            <small>small</small>
            <sub> sub </sub>
            <sup> sup </sup>
            <u> Statements... </u>
            <abbr title="National Aeronautics and Space Administration">NASA</abbr>
            <strike> strikethrough </strike>
            <span><del> deprecated info </del> <ins> new info </ins> </span>
            <s> not relevant </s>
            <time datetime="2020-08-17 08:00">Monday at 8:00 AM</time>
            <ruby>
                <rb>ruby base<rt>annotation
            </ruby>
            <br>
            <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>CANC</kbd>
        </p>
    </div>
    `;

const config = parseHtml(testHTML);

const HomeScreen = () => {
    return (
        <SafeAreaView>
            {config.map(c => RenderEngine(c))}
        </SafeAreaView >
    );
};

export default HomeScreen;

