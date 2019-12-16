import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(rtl.cleanup);

let wrapper;

let OpenGate = () => wrapper.queryByText("Open Gate");
let CloseGate = () => wrapper.queryByText("Close Gate");
let LockGate = () => wrapper.queryByText("Lock Gate");
let UnlockGate = () => wrapper.queryByText("Unlock Gate");

describe("Button behaves as they are supposed to", () => {
  it("Shows close gate and lock gate buttons when unlocked and closed", () => {
    wrapper = rtl.render(<Controls locked={false} closed={false} />);
    expect(CloseGate()).toBeInTheDocument();
    expect(LockGate()).toBeInTheDocument();
  });

  it("Changes Close gate text to Open gate when gate closed", () => {
    wrapper = rtl.render(<Controls locked={false} closed={true} />);
    expect(OpenGate()).toBeInTheDocument();
  });

  it("Lock gate button is disabled when gate is closed", () => {
    wrapper = rtl.render(<Controls locked={false} closed={false} />);
    expect(LockGate().disabled).toEqual(true);
  });

  it("Lock gate button is enabled when gate is open", () => {
    wrapper = rtl.render(<Controls locked={false} closed={true} />);
    expect(LockGate().disabled).toEqual(false);
  });

  it("Open gate button is disabled when gate is locked", () => {
    wrapper = rtl.render(<Controls locked={true} closed={true} />);
    expect(OpenGate().disabled).toEqual(true);
  });

  it("Open gate button is enabled when gate is unlocked", () => {
    wrapper = rtl.render(<Controls locked={false} closed={true} />);
    expect(OpenGate().disabled).toEqual(false);
  });
});
