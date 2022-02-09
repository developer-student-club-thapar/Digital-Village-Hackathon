import React from "react";
import styled from "styled-components";
export default function Rectangle(props) {
  const { src } = props;

  return <Rec src={src} />;
}

const Rec = styled.img`
  width: 1172px;
  height: 642px;
`;
