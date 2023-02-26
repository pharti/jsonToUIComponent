import { Box, Link, Text, Image, FormControl, Input, Button, ArrowBackIcon, Heading, Avatar, Icon } from 'native-base';
//... Maps native base component to common HTML tags
export const ComponentToCommonTagsMap = {
    p: Text,
    h1: Text,
    h2: Text,
    h3: Text,
    h4: Text,
    h5: Text,
    h6: Text,
    b: Text,
    span: Text,

    i: Text,
    em: Text,
    b: Text,
    a: Link,
    mark: Text,
    small: Text,
    sub: Text,
    u: Text, //...u HTML tag is outdated, instead use ins
    strike: Text, //...strike HTML tag is outdated, instead use del
    del: Text,
    ins: Text,
    div: Box,
    img: Image,
    form: FormControl,
    input: Input,
    icon: ArrowBackIcon,

    //... Generic Components
    heading: Heading,
    subHeading: Text,
    caption: Text,
    button: Button,
    image: Image,
    container: Box,
    avatar: Avatar,
    icon: Icon,
    //... Composite Components
    card: Box,
};

//... Maps native base font size standards to HTML tags
export const ComponentToFontSizeMap = {
    small: 'xs',
    caption: 'sm',
    p: 'md',
    h1: 'xl',
    h2: '2xl',
    h3: '3xl',
    h4: '4xl',
    h5: '5xl',
    h6: '6xl',
};

//... Maps native base font style standards to HTML tags
export const ComponentToFontStyleMap = {
    i: 'italic',
    em: 'italic'
};

//... Maps native base font weight standards to HTML tags
export const ComponentToFontWeightMap = {
    b: 'bold',
};
