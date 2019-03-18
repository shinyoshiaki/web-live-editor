import React, { FunctionComponent } from "react";
import { FileCopy } from "@material-ui/icons";
import styled from "styled-components";

export interface Props {
  label: string;
}

const Flex = styled.div`
  display: flex;
  padding: 3px;
  margin: 1px;
`;

const Space = styled.div`
  margin: 2px;
`;

const FileItem: FunctionComponent<Props> = ({ label }) => {
  return (
    <Flex>
      <FileCopy style={{ color: "gray", height: 25 }} />
      <Space />
      {label}
    </Flex>
  );
};

export default FileItem;
