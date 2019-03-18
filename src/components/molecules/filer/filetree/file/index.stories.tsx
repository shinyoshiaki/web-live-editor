import React from "react";
import { storiesOf } from "@storybook/react";
import Component, { Props } from ".";
import { action } from "@storybook/addon-actions";

const props: Props = { label: "test" };

storiesOf("filetree", module).add("file", () => <Component {...props} />);
