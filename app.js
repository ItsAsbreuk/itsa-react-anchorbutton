"use strict";

const React = require("react"),
    ReactDOM = require("react-dom"),
    Component = require("./lib/component-styled.jsx");

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
