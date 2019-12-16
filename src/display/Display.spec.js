import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

let wrapper;
beforeEach(() => {
  wrapper = rtl.render(<Display />);
});

let Open = () => wrapper.queryByText("Open");
let Closed = () => wrapper.queryByText("Closed");
let Unlocked = () => wrapper.queryByText("Unlocked");
let Locked = () => wrapper.queryByText("Locked");

describe("Display Unlocked and Open freshly rendered Display component", () => {
  it("Displays Open", () => {
    expect(Open()).toBeInTheDocument();
  });

  it("Displays Unlocked", () => {
    expect(Unlocked()).toBeInTheDocument();
  });
});

describe("Displays properly with passed down props", () => {
  it("Displays Closed if the closed prop is true and Open otherwise", () => {
    wrapper = rtl.render(<Display closed={true} />);
    expect(Closed()).toBeInTheDocument();
  });
  it("Displays Locked if the locked prop is true and Unlocked otherwise", () => {
    wrapper = rtl.render(<Display locked={true} />);
    expect(Locked()).toBeInTheDocument();
  });
});

describe("Has the right className associated with it", () => {
  it("Use 'red-led' class when closed", () => {
    wrapper = rtl.render(<Display closed={true} />);
    expect(Closed().classList.contains("red-led")).toBe(true);
  });
  it("Use 'red-led' class when locked", () => {
    wrapper = rtl.render(<Display locked={true} />);
    expect(Locked().classList.contains("red-led")).toBe(true);
  });

  it("Use 'green-led' class when open", () => {
    expect(Open().classList.contains("green-led")).toBe(true);
  });
  it("Use 'green-led' class when unlocked", () => {
    expect(Unlocked().classList.contains("green-led")).toBe(true);
  });
});
