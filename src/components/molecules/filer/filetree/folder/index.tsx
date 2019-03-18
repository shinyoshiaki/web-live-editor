import React, { FunctionComponent, useState } from "react";
import { Folder, FileCopy } from "@material-ui/icons";
import styled from "styled-components";

import FilerInput from "../input";
import { Space } from "../../../atoms/styles/styled-components";

export interface Props {
  label: string;
  path: string;
  newItem: (s: string) => void;
}

const Container = styled.div`
  padding: 1px;
`;

const Flex = styled.div`
  display: flex;
`;

const Click = styled.div`
  cursor: pointer;
`;

const Hide = styled.div`
  visibility: ${(props: { hidden: boolean }) => (props.hidden ? "hidden" : "")};
`;

const FolderItem: FunctionComponent<Props> = ({ label, newItem, path }) => {
  const [hover, setHover] = useState(false as boolean);
  const [inputType, setInputType] = useState(undefined as (
    | undefined
    | "file"
    | "folder"));

  return (
    <Container
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Flex>
        <Folder />
        <Space />
        {label}
        <Space margin={15} />
        <Hide hidden={!hover}>
          <Flex style={{ color: "gray" }}>
            <Click onClick={() => setInputType("folder")}>
              <Folder />
            </Click>
            <Click onClick={() => setInputType("file")}>
              <FileCopy />
            </Click>
          </Flex>
        </Hide>
      </Flex>
      {inputType && (
        <div style={{ background: "white" }}>
          <FilerInput
            onClose={() => setInputType(undefined)}
            onEnter={s => {
              if (inputType === "file") newItem(path + "/" + s);
              else if (inputType === "folder") newItem(path + "/" + s + "/");
              setInputType(undefined);
            }}
          />
        </div>
      )}
    </Container>
  );
};

export default FolderItem;
