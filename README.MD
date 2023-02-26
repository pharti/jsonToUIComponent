## Json Element Creator
React Native application which runs on both Mobile and Web. Converts json or html to React Elements.

## Workflow
# <img src="https://raw.githubusercontent.com/pharti/jsonToUIComponent/feature/parserPackage/workflow.png" alt="Logic flow diagram">

## Get Started
Install packages

```sh
    npm install
```
To run on web

```sh
    npm run web
```

## Usage
Pass a html or any custom defined config object to the Render Engine.

Example element object
```sh
 {
        type: 'Element',
        tagName: 'tag name', //...Can be a HTML tag or a defined custom tag
        attributes: {},      //... styles or other tag attributes 
        children: [{         //... nested child tags. 
            type: 'Element',
            tagName: 'tag name',
            attributes: {},
            children: []
        }]
    }
```