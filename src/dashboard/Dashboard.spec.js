// Test away
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

let wrapper;
beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

wrapper = rtl.render(<Dashboard />);

let Unlocked = () => wrapper.queryByText("Unlocked");
let Locked = () => wrapper.queryByText("Locked");
let Open = () => wrapper.queryByText("Open");
let Closed = () => wrapper.queryByText("Closed");
let LockGate = () => wrapper.queryByText("Lock Gate");
let UnlockGate = () => wrapper.queryByText("Unlock Gate");
let CloseGate = () => wrapper.queryByText("Close Gate");
let OpenGate = () => wrapper.queryByText("Open Gate");

it("renders without crashing", () => {
  expect(wrapper.container).toMatchSnapshot();
});

describe("Dashboard component freshly rendered", () => {
  it('renders a "Unlocked" text node', () => {
    expect(Unlocked()).toBeInTheDocument();
    expect(Unlocked()).toBeVisible();
  });

  it('renders a "Open" text node', () => {
    expect(Open()).toBeInTheDocument();
    expect(Open()).toBeVisible();
  });

  it('renders a "Lock Gate" text node', () => {
    expect(LockGate()).toBeInTheDocument();
    expect(LockGate()).toBeVisible();
  });

  it('renders a "Close Gate" text node', () => {
    expect(CloseGate()).toBeInTheDocument();
    expect(CloseGate()).toBeVisible();
  });
});

describe("Dashboard component when we CLOSE the gate", () => {
  it("Close gate button changes to Open gate button", () => {
    expect(CloseGate()).toBeInTheDocument();
    rtl.fireEvent.click(CloseGate());
    expect(OpenGate()).toBeInTheDocument();
  });

  it("Open display changes to closed", () => {
    expect(Open()).toBeInTheDocument();
    rtl.fireEvent.click(CloseGate());
    expect(Closed()).toBeInTheDocument();
  });
});

describe("Dashboard component when the CLOSE and LOCK the gate", () => {
  it("Lock gate button changes to Unlock gate", () => {
    rtl.fireEvent.click(CloseGate());
    expect(LockGate()).toBeInTheDocument();
    rtl.fireEvent.click(LockGate());
    expect(UnlockGate()).toBeInTheDocument();
  });

  it("Unlocked display changes to locked", () => {
    expect(Unlocked()).toBeInTheDocument();
    rtl.fireEvent.click(CloseGate());
    rtl.fireEvent.click(LockGate());
    expect(Locked()).toBeInTheDocument();
  });
});
