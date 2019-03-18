import React from "react";
import { storiesOf } from "@storybook/react";
import Component, { Props } from ".";

const props: Props = {
  file: (label, path) => <div style={{ color: "blue" }}>{label}</div>,
  folder: (label, path) => <div style={{ color: "gray" }}>{label}</div>,
  paths: [
    "src/test/1.ts",
    "src/test/2.ts",
    "src/components/index.tsx",
    "src/components/atoms/index.tsx",
    "package.json",
    "src/components/atoms/stories.tsx",
    "src/components/molecules/stories.tsx"
  ]
};

storiesOf("molecules", module).add("treeview", () => <Component {...props} />);
