import React from "react";
import styled from "styled-components";
export default function Imgtop(props) {
  const { src } = props;

  return <SponsorImg src={src} />;
}

const SponsorImg = styled.img`
  width: 350px;
  height: 326px;
  object-fit: cover;
`;
