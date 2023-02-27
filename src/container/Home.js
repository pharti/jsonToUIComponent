/* eslint-disable prettier/prettier */

import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { parseHtml } from '../helpers/ParserEngine';
import RenderEngine from '../helpers/RenderEngine';
import cardRender from '../components/cardRender';

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

        <div class="card">
  <img
    src="https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
    class="card-img"
  />
  <div class="card-body">
    <div class="card-title">This is a title</div>
    <div class="card-subtitle">This is the subtitle</div>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <button class="btn btn-secondary">Click Me!</button>
  </div>
</div>
    </div>
    `;

const config = parseHtml(testHTML);

const CardConfig = {
    component: "card",
    children: [
        {
            component: "img",
            src:
                "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            component: "body",
            children: [
                {
                    component: "title",
                    children: "This is a title"
                },
                {
                    component: "subtitle",
                    children: "This is the subtitle"
                },
                {
                    component: "text",
                    children:
                        "Some quick example text to build on the card title and make up the bulk of the card's content."
                },
                {
                    component: "button",
                    children: "Click Me!"
                }
            ]
        }
    ]
};

const HomeScreen = () => {
    return (
        <div className="App">
            {/* {config.map(c => RenderEngine(c))} */}
            <div className="card-container">
                {CardConfig.map(c => cardRender(c))}
            </div>
        </div>
    );
};

export default HomeScreen;

