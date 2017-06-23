"use strict";

/**
 * Description here
 *
 *
 *
 * <i>Copyright (c) 2016 ItsAsbreuk - http://itsasbreuk.nl</i><br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module itsa-react-anchorbutton.jsx
 * @class Component
 * @since 15.0.0
*/

require("itsa-dom");

const React = require("react"),
    PropTypes = require("prop-types"),
    MAIN_CLASS = "itsa-anchorbutton",
    FORM_ELEMENT_CLASS_SPACES = " itsa-formelement",
    ReactDom = require("react-dom"),
    utils = require("itsa-utils"),
    later = utils.later;

class Component extends React.Component {
    constructor(props) {
        super(props);
        const instance = this;
        instance.blur = instance.blur.bind(instance);
        instance.focus = instance.focus.bind(instance);
        instance.handleClick = instance.handleClick.bind(instance);
    }

    /**
     * Blurs the Component.
     *
     * @method blur
     * @chainable
     * @since 0.0.1
     */
    blur() {
        var instance = this;
        instance._anchorNode.blur();
        return instance;
    }

    /**
     * componentDidMount does some initialization.
     *
     * @method componentDidMount
     * @since 0.0.1
     */
    componentDidMount() {
        const instance = this;
        instance._anchorNode = ReactDom.findDOMNode(instance);
        if (instance.props.autoFocus) {
            instance._focusLater = later(() => instance.focus(), 50);
        }
    }

    /**
     * componentWilUnmount does some cleanup.
     *
     * @method componentWillUnmount
     * @since 0.0.1
     */
    componentWillUnmount() {
        this._focusLater && this._focusLater.cancel();
    }

    /**
     * Sets the focus on the Component.
     *
     * @method focus
     * @param [transitionTime] {Number} transition-time to focus the element into the view
     * @chainable
     * @since 0.0.1
     */
    focus(transitionTime) {
        var instance = this;
        instance._anchorNode.itsa_focus && instance._anchorNode.itsa_focus(null, null, transitionTime);
        return instance;
    }

    /**
     * Callback-fn for the onClick-event.
     * Will invoke `this.props.onClick`
     *
     * @method handleClick
     * @since 0.0.1
     */
    handleClick(e) {
        const instance = this,
              props = instance.props,
              onClick = props.onClick;
        if (!props.disabled && !props.readOnly) {
            onClick && onClick.apply(null, arguments);
        }
        else {
            e.preventDefault();
        }
    }

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponent
     * @since 15.0.0
     */
    render() {
        let className = MAIN_CLASS+FORM_ELEMENT_CLASS_SPACES;
        const instance = this,
            props = instance.props,
            propsClass = props.className;
        propsClass && (className+=" "+propsClass);
        return (
            <a {...props}
                className={className}
                onClick={instance.handleClick} >
                {props.children}
            </a>
        );
    }
}

Component.propTypes = {
    /**
     * Whether to autofocus the Component.
     *
     * @property autoFocus
     * @type Boolean
     * @since 0.0.1
    */
    autoFocus: PropTypes.bool,

    /**
     * The Component its children
     *
     * @property children
     * @type String || Object || Array
     * @since 15.0.0
    */

    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),

    /**
     * Additional classname for the Component.
     *
     * @property className
     * @type String
     * @since 15.0.0
    */
    className: PropTypes.string,

    /**
     * Whether the button is disabled
     *
     * @property disabled
     * @type Boolean
     * @since 0.0.1
    */
    disabled: PropTypes.bool,

    /**
     * The url for the anchor-element.
     *
     * @default "#"
     * @property href
     * @type String
     * @since 0.0.1
    */
    href: PropTypes.string,

    /**
     * The name-attribute of the button
     *
     * @property name
     * @type String
     * @since 0.0.1
    */
    name: PropTypes.string,

    /**
     * Callback whenever the button gets clicked by the left mousebutton.
     *
     * @property onClick
     * @type Function
     * @since 0.0.1
    */
    onClick: PropTypes.func,

    /**
     * Whether the checkbox is readonly
     *
     * @property readOnly
     * @type Boolean
     * @default false
     * @since 15.2.0
    */
    readOnly: PropTypes.bool,

    /**
     * Inline style
     *
     * @property style
     * @type object
     * @since 0.0.1
    */
    style: PropTypes.object,

    /**
     * The tabIndex
     * Default: 1
     *
     * @property tabIndex
     * @type Number
     * @since 0.0.1
    */
    tabIndex: PropTypes.number,

    /**
     * The anchor-target where the response should go into.
     *
     * @property target
     * @type String
     * @since 0.0.1
    */
    target: PropTypes.string
};

Component.defaultProps = {
    autoFocus: false,
    disabled: false,
    href: "#",
    readOnly: false
};

module.exports = Component;
