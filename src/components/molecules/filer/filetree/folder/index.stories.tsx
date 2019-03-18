import React from "react";
import { storiesOf } from "@storybook/react";
import Component, { Props } from ".";
import { action } from "@storybook/addon-actions";

const props: Props = {
  label: "test",
  path: "test",
  newItem: action("")
};

storiesOf("filetree", module).add("folder", () => <Component {...props} />);
