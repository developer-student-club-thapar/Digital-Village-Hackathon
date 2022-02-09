import React from "react";
import styled from "styled-components";
export default function Title(props) {
  const { children } = props;

  return <Title1>{children}</Title1>;
}

const Title1 = styled.h1`
  width: 302px;
  min-height: 94px;
  -webkit-text-stroke: 2px var(--white);
  font-family: var(--font-family-poppins);
  font-weight: 600;
  color: transparent;
  font-size: var(--font-size-xl);
  letter-spacing: 0;
`;
