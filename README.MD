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

## References
 - React [createElement](https://beta.reactjs.org/reference/react/createElement) Docs
 - Html to Object [Parser](https://www.npmjs.com/package/htmlstr-parser) library
 - Tutorial to [Adding React Native Web to an Existing Project](https://arry.medium.com/how-to-add-react-native-web-to-an-existing-react-native-project-eb98c952c12f)
 - [Link] to React-native-vector-icons not working on web solution (https://stackoverflow.com/questions/60263461/how-to-use-react-native-vector-icons-with-react-native-web/75576981#75576981)
