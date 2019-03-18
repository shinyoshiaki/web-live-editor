import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Close } from "@material-ui/icons";
import { Clickable } from "../../../atoms/styles/styled-components";

const Flex = styled.div`
  display: flex;
`;

export interface Props {
  onEnter: (s: string) => void;
  onClose: () => void;
}

const FilerInput: FunctionComponent<Props> = ({ onEnter, onClose }) => {
  const [input, setInput] = useState("");

  return (
    <Flex>
      <Clickable
        onClick={() => {
          onClose();
          setInput("");
        }}
      >
        <Close />
      </Clickable>
      <input
        onKeyPress={e => {
          console.log(e.key);
          if (e.key === "Enter") {
            onEnter(input);
            setInput("");
          }
        }}
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </Flex>
  );
};

export default FilerInput;
