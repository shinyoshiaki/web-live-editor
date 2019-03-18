import React from "react";
import { storiesOf } from "@storybook/react";
import Component from "./view";
import { props } from "../../../components/molecules/filer/filetree/index.stories";

storiesOf("organisms", module).add("filer", () => (
  <Component {...props} height="200px" />
));
