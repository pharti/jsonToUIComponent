/* eslint-disable prettier/prettier */
import { Box, Text, Accordion } from "@react-native-material/core";

//... Maps native base component to common HTML tags
export const ComponentToCommonTagsMap = {

    //...Layout tags
    header: Box,
    // main
    footer: Box,
    // nav 
    article: Box,
    // aside
    div: Box,
    section: Box,


    sub: Text,
    // sup
    u: Text,        //...u HTML tag is outdated, instead use ins
    i: Text,
    b: Text,
    em: Text,
    // strong
    del: Text,
    ins: Text,
    card: Box,
    // Accordion: Accordion,
};

//... Maps native base font size standards to HTML tags
export const ComponentToFontSizeMap = {
    small: 'xs',
    caption: 'sm',
    p: 'md',
    h1: '6xl',
    h2: '5xl',
    h3: '4xl',
    h4: '3xl',
    h5: '2xl',
    h6: 'xl',
    time: 'sm'
};

//... Maps native base font style standards to HTML tags
export const ComponentToFontStyleMap = {
    i: 'italic',
    em: 'italic'
};

//... Maps native base font weight standards to HTML tags
export const ComponentToFontWeightMap = {
    b: 'bold',
    strong: 'bold',
};