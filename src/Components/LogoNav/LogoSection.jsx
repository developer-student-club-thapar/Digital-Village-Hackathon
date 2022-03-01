import React from "react";
import tel from "./assets/tel_aviv.png";
import ti from "./assets/ti.png";
import meity from "./assets/meity.png";
import step from "./assets/step.png";
import styled from "@emotion/styled";
import dsc from "./assets/dsc.png";
import { Col, Row } from "react-bootstrap";

const LogoSectionWrapper = styled.div`
  display: none;
  background-color: #072227;
  padding: 0;
  @media (max-width: 1400px) {
    display: block;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoDiv = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 3rem;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  @media (max-width: 1000px) {
    width: 50vw;
  }
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const StyledImg1 = styled.img`
  width: 60%;
`;
const StyledImg2 = styled.img`
  width: 70%;
  position: relative;
  top: 2px;
`;
const StyledImg3 = styled.img`
  width: 70%;
  position: relative;
  top: 2px;
`;
const StyledImg4 = styled.img`
  width: 25%;
  position: relative;
  top: 2px;
`;
const StyledImgDsc = styled.img`
width: 100%;
`;
function LogoSection() {
  return (
    <LogoSectionWrapper>
      <TitleDiv>
        <h2 className="main-heading" data-content="Collaborators">
          Collaborators
        </h2>
      </TitleDiv>

     <div className="collaborator-logo-div">
      <Row>
        <Col md={7}><img src={dsc}/></Col>
        <Col md={5}><img src={tel}/></Col>
      </Row>
      <Row>
        <Col md={4}><img src={meity}/></Col>
        <Col md={4}><img src={step}/></Col>
        <Col md={4}><img src={ti}/></Col>
      </Row>
      </div>

    </LogoSectionWrapper>
  );
}

export default LogoSection;
