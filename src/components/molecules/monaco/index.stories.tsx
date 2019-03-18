import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";

storiesOf("molecules", module).add("monaco", () => (
  <div style={{ height: "50vh" }}>
    <Component />
  </div>
));
