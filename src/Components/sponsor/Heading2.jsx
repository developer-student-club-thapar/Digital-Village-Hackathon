import React from "react";
import styled from "styled-components";
export default function Title2(props) {
  const { children } = props;

  return <Title>{children}</Title>;
}

const Title = styled.h1`
  width: 302px;
  min-height: 94px;
  font-family: var(--font-family-poppins);
  font-weight: 600;
  color: #08bd04;
  font-size: var(--font-size-xl);
  letter-spacing: 0;
`;
