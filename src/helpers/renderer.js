import React from "react";
import { Stack, Box, Text, Center } from 'native-base'

const KeysToComponentMap = {
    stack: Stack,
    box: Box,
    center: Center,
    text: Text,
};

function renderer(config) {
    if (typeof KeysToComponentMap[config.component] !== "undefined") {
        return React.createElement(
            KeysToComponentMap[config.component], // React component that we want to render
            { ...config.props },
            config.children &&
            (typeof config.children === "string"
                ? config.children
                : config.children.map(c => renderer(c)))
        );
    }
}

export default renderer;