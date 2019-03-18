import React from "react";
import { storiesOf } from "@storybook/react";
import Component, { Props } from ".";
import { action } from "@storybook/addon-actions";

export const props: Props = {
  paths: [
    "src/test/1.ts",
    "src/test/2.ts",
    "src/components/index.tsx",
    "src/components/atoms/index.tsx",
    "components/atoms/index.tsxindex.tsxindex.tsxindex.tsx",
    "package.json",
    "src/components/atoms/stories.tsx",
    "src/components/molecules/stories.tsx",
    "src/test/new/"
  ],
  onCreate: action("")
};

storiesOf("molecules", module).add("filetree", () => <Component {...props} />);
