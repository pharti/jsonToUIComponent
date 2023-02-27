/* eslint-disable prettier/prettier */
import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const KeysToComponentMap = {
  card: Card,
  img: CardImg,
  text: CardText,
  body: CardBody,
  title: CardTitle,
  subtitle: CardSubtitle,
  button: Button
};

function renderer(config) {


    return React.createElement(
      KeysToComponentMap[config.component],
      {
        src: config.src,
      },
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : config.children.map(c => renderer(c)))
    );
}

export default renderer;