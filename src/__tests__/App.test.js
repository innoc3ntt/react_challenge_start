import App from "../App";
import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
});

it("renders correctly", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

/*
describe("App component", () => {
  describe("callback functions", () => {
    it("addContact adds a new object to the contact array", () => {
      const wrapper = shallow(<App />);
      const text = wrapper.find("p").text();
      expect(text).toEqual("Count: 0");
    });
  });
});
*/
