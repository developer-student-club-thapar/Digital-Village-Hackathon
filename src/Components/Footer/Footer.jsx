import React from "react";
import ig from "./assets/ig.svg";
import linkedin from "./assets/linkedin.svg";
import dis from "./assets/dis.svg";
import styled from "@emotion/styled";
import dsc from "../LogoNav/assets/dsc.png";

const FooterWrapper = styled.div`
  padding: 1rem 3rem;
  margin: 0 20vw 0 18vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1``;

const IconsDiv = styled.div``;

const Icon = styled.img`
  padding: 1rem;
`;

const Address = styled.p``;

function Footer() {
  return (
    <FooterWrapper>
      <div>
        <img src={dsc} alt="" height={80} />
      </div>
      <div>
        <Title>Contact Us</Title>
        <IconsDiv>
          <a
            href="https://www.instagram.com/dsc.tiet/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src={ig} height={70} />
          </a>
          <a
            href="https://www.linkedin.com/company/40815646"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src={linkedin} height={63} />
          </a>
          <a
            href="https://discord.gg/G4VvVUvb"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src={dis} height={70} />
          </a>
        </IconsDiv>
      </div>
      {/* <div>
        <Title> Address </Title>
        <Address>Thapar Institute of Engineering and Technology</Address>
        <Address>Patiala, Punjab, India</Address>
        <Address>147004</Address>
      </div> */}
    </FooterWrapper>
  );
}

export default Footer;
