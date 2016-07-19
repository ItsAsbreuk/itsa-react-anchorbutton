[![Build Status](https://travis-ci.org/ItsAsbreuk/itsa-react-anchorbutton.svg?branch=master)](https://travis-ci.org/ItsAsbreuk/itsa-react-anchorbutton)

Just a simple react-component that styles the anchor-element into a nice button.

And just some nice extra features:
* you can disable the anchor-functionality by setting `this.props.disabled` to `true`
* you can give it the initial focus, by specifying `this.props.autoFocus` to `true`

## How to use:

```js
"use strict";

require("itsa-react-anchorbutton/css/component.scss");

const React = require("react"),
    ReactDOM = require("react-dom"),
    Component = require("itsa-react-anchorbutton");

const props = {
    autoFocus: true,
    href: "http://itsaserver.io"
};

const ContainerComponent = React.createClass({
    render() {
        return (
            <Component {...this.props} >
                Click me and visit http://itsaserver.io
            </Component>
        );
    }
});

ReactDOM.render(
    <ContainerComponent {...props} />,
    document.getElementById("component-container")
);
```

## About the css

You need the right css in order to make use of `itsa-react-anchorbutton`. There are 2 options:

1. You can use the css-files inside the `css`-folder.
2. You can use: `Component = require("itsa-react-anchorbutton/lib/component-styled.jsx");` and build your project with `webpack`. This is needed, because you need the right plugin to handle a requirement of the `scss`-file.


[View live example](http://projects.itsasbreuk.nl/react-components/itsa-anchorbutton/component.html)

[API](http://projects.itsasbreuk.nl/react-components/itsa-anchorbutton/api/)