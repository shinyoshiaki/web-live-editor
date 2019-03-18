import styled from "styled-components";

interface SpaceProps {
  margin?: number;
}

export const Space = styled.div`
  margin: ${(props: SpaceProps) =>
    props.margin ? props.margin + "px" : "5px"};
`;

export const Clickable = styled.div`
  cursor: pointer;
`;
