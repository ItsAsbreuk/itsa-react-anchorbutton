/*global describe, it, before, after */

"use strict";

const React = require("react");
const ReactDOM = require("react-dom");
const TestUtils = require("react-dom/test-utils");

const chai = require("chai");
const expect = chai.expect;
const equalJSX = require("chai-equal-jsx");
const renderer = TestUtils.createRenderer();

chai.use(equalJSX);

const Component = require("../lib/component.jsx");

describe("React Component", function () {

    before(function () {
        this.jsdom = require("jsdom-global")();
    });

    after(function () {
        this.jsdom();
    });

    it("Rendering component", function () {
        renderer.render(<Component />);
        const actual = renderer.getRenderOutput();
        const expected = (
            <a
                autoFocus={false}
                className="itsa-anchorbutton itsa-formelement"
                disabled={false}
                href="#"
                onClick={function noRefCheck() {}}
                readOnly={false} />
        );
        expect(actual).to.equalJSX(expected);
    });

    it("Rendering disabled component", function () {
        renderer.render(<Component disabled={true} />);
        const actual = renderer.getRenderOutput();
        const expected = (
            <a
                autoFocus={false}
                className="itsa-anchorbutton itsa-formelement"
                disabled={true}
                href="#"
                onClick={function noRefCheck() {}}
                readOnly={false} />
        );
        expect(actual).to.equalJSX(expected);
    });

    it("Rendering readOnly component", function () {
        renderer.render(<Component readOnly={true} />);
        const actual = renderer.getRenderOutput();
        const expected = (
            <a
                autoFocus={false}
                className="itsa-anchorbutton itsa-formelement"
                disabled={false}
                href="#"
                onClick={function noRefCheck() {}}
                readOnly={true} />
        );
        expect(actual).to.equalJSX(expected);
    });

    it("Rendering focussed component", function () {
        renderer.render(<Component autoFocus={true} />);
        const actual = renderer.getRenderOutput();
        const expected = (
            <a
                autoFocus={true}
                className="itsa-anchorbutton itsa-formelement"
                disabled={false}
                href="#"
                onClick={function noRefCheck() {}}
                readOnly={false} />
        );
        expect(actual).to.equalJSX(expected);
    });

    it("Rendering with classname", function () {
        renderer.render(<Component className="test" />);
        const actual = renderer.getRenderOutput();
        const expected = (
            <a
                autoFocus={false}
                className="itsa-anchorbutton itsa-formelement test"
                disabled={false}
                href="#"
                onClick={function noRefCheck() {}}
                readOnly={false} />
        );
        expect(actual).to.equalJSX(expected);
    });

});
