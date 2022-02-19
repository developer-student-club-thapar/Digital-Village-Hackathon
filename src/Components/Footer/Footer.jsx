import React from "react";
import ig from "./assets/ig.svg";
import linkedin from "./assets/linkedin.svg";
import dis from "./assets/dis.svg";
import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  padding: 1rem 3rem;

  background-color: #282a31;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1``;

const IconsDiv = styled.div``;

const Icon = styled.img`
  padding: 1rem;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Title>Contact Us</Title>
      <IconsDiv>
        <Icon src={ig} />
        <Icon src={linkedin} />
        <Icon src={dis} />
      </IconsDiv>
    </FooterWrapper>
  );
}

export default Footer;
