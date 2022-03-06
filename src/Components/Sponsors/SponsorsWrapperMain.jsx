import React from "react";
import spn from "./img.png";
import Sponsors from "../../data/sponsors.js";
import styled from "@emotion/styled";
import { Row, Col } from "react-bootstrap";
import devfolio from "../../images/devfolio.png";
import polygon from "../../images/polygon.png";
import tezos from "../../images/tezos.png";
import celo from "../../images/celo.png";
import filecoin from "../../images/filecoin.png";
import gmc from "../../images/gmc.png";
import gdsc_bu from "../../images/gdsc_bu.png";
import taskade from "../../images/taskade.png";
import wb from "../../images/wb.png";
import "./sponsors.css";

const SponsorsWrapper = styled.div`
  background-color: black;
  padding-bottom: 3rem;
`;
const SponsorHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleDiv = styled.div`
  padding-right: 2rem;
  @media (max-width: 850px) {
    display: flex;
    // background-color: #282a31;
    width: 100%;
    justify-content: center;
  }
`;

const SponsorSVG = styled.img`
  display: none;
  height: 350px;
  padding: 0 3rem;

  @media(min-width: 850px) {
    display: block;
`;

const SponsorsCard = styled.div`
  min-height: 70vh;
  border-radius: 2rem;
  background: hsla(0, 0%, 78%, 1);
  margin: 2rem 6rem;
  // transform: matrix(0.71, -0.39, 1.29, 0.71, 0, 0);
  mix-blend-mode: normal;
  backdrop-filter: blur(40px);

  background: linear-gradient(
    60deg,
    hsla(0, 0%, 78%, 0.5) 20%,
    hsla(0, 0%, 27%, 0.5) 99%
  );

  background: -moz-linear-gradient(
    60deg,
    hsla(0, 0%, 78%, 0.5) 20%,
    hsla(0, 0%, 27%, 0.5) 99%
  );

  background: -webkit-linear-gradient(
    60deg,
    hsla(0, 0%, 78%, 0.5) 20%,
    hsla(0, 0%, 27%, 0.5) 99%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#C8C8C8", endColorstr="#444444", GradientType=1 );
`;

const Img = styled.img`
  cursor: pointer;
`;

function SponsorsWrapperMain() {
  return (
    <SponsorsWrapper id="sponsors">
      <SponsorHeading>
        <SponsorSVG src={spn} />
        <TitleDiv>
          <h1
            className="main-heading"
            data-content="Sponsors"
            // style={{ textAlign: "center" }}
          >
            Sponsors
          </h1>
        </TitleDiv>
      </SponsorHeading>
      <div className="sponsors-div">
        <Row>
          <h2 className="subheading" id="desktop" data-content="Title Sponsors">
            Title Sponsors
          </h2>
          <h2 className="subheading" id="mobile" data-content="Title">
            Title
          </h2>
          <h2 className="subheading mobile" id="mobile" data-content="Sponsors">
            Sponsors
          </h2>
          <Col xs={12} sm={6} md={4}>
            <Img
              src={devfolio}
              onClick={() => {
                window.location.href = "https://devfolio.co";
              }}
              style={{ height: "100px", width: "400px" }}
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Img
              src={polygon}
              onClick={() => {
                window.location.href = "https://polygon.technology/";
              }}
              style={{ height: "100px", width: "400px" }}
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Img
              src={wb}
              onClick={() => {
                window.location.href = "https://wandb.ai/site";
              }}
              style={{ height: "100px", width: "400px" }}
            />
          </Col>
        </Row>
        <Row>
          <h2
            className="subheading desktop"
            id="desktop"
            data-content="Power Sponsors"
          >
            Power Sponsors
          </h2>
          <h2 className="subheading" id="mobile" data-content="Power">
            Power
          </h2>
          <h2 className="subheading" id="mobile" data-content="Sponsors">
            Sponsors
          </h2>
          <Col xs={12} sm={6} md={4}>
            <Img
              src={tezos}
              onClick={() => {
                window.location.href = "https://tezos.com";
              }}
              style={{ height: "100px", width: "250px" }}
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Img
              src={celo}
              onClick={() => {
                window.location.href = "https://celo.org ";
              }}
              style={{ height: "100px", width: "250px" }}
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Img
              src={filecoin}
              onClick={() => {
                window.location.href = "https://filecoin.io ";
              }}
              style={{ height: "100px", width: "250px" }}
            />
          </Col>
        </Row>
        <Row>
          <h2
            className="subheading desktop"
            id="desktop"
            data-content="Associate Sponsors"
          >
            Associate Sponsors
          </h2>
          <h2 className="subheading" id="mobile" data-content="Associate">
            Associate
          </h2>
          <h2 className="subheading" id="mobile" data-content="Sponsors">
            Sponsors
          </h2>
          <Col>
            <Img
              src={gmc}
              onClick={() => {
                window.location.href = "https://givemycertificate.com";
              }}
              style={{
                height: "150px",
                width: "450px",
                transform: "scale(1.5)",
              }}
            />
          </Col>
          <Col>
            <Img
              src={taskade}
              onClick={() => {
                window.location.href = "https://www.taskade.com";
              }}
              style={{ height: "150px", width: "450px" }}
            />
          </Col>
        </Row>
        <Row>
          <h2
            className="subheading desktop"
            id="desktop"
            data-content="Outreach"
          >
            Outreach
          </h2>
          <h2 className="subheading" id="mobile" data-content="Outreach">
            Outreach
          </h2>
          <Col>
            <Img
              src={gdsc_bu}
              height={200}
              onClick={() => {
                window.location.href =
                  "https://gdsc.community.dev/bennett-university-greater-noida/";
              }}
              style={{
                height: "250px",
                width: "550px",
              }}
            />
          </Col>
        </Row>
      </div>
    </SponsorsWrapper>
  );
}

export default SponsorsWrapperMain;
504;
