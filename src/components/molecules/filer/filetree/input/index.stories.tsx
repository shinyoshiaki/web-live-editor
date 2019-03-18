import React from "react";
import { storiesOf } from "@storybook/react";
import Component, { Props } from ".";
import { action } from "@storybook/addon-actions";

const props: Props = { onClose: action(""), onEnter: action("") };

storiesOf("filetree", module).add("filerinput", () => <Component {...props} />);
