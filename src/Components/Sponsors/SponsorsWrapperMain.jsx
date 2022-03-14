import React from "react";
import spn from "./img.png";
import Sponsors from "../../data/sponsors.js";
import styled from "@emotion/styled";
import { Row } from "react-bootstrap";
import devfolio from "../../images/devfolio.png";
import polygon from "../../images/polygon.png";
import tezos from "../../images/tezos.png";
import celo from "../../images/celo.png";
import filecoin from "../../images/filecoin.png";
import gmc from "../../images/gmc.png";
import gdsc_bu from "../../images/gdsc_bu.png";
import taskade from "../../images/taskade.png";
import bal from "../../images/bal.png";
import hhe from "../../images/hhe.png";
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

const Col = styled.div`
  flex: 1 0 0%;
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
          <div className="mobile_heading_sponsor">
            <h2 className="subheading" id="mobile" data-content="Title">
              Title
            </h2>
            <h2
              className="subheading mobile"
              id="mobile"
              data-content="Sponsors"
            >
              Sponsors
            </h2>
          </div>
          <Col className="title_sponsors">
            <Img
              id="img_devfolio"
              src={devfolio}
              onClick={() => {
                window.location.href = "https://devfolio.co";
              }}
            />
          </Col>
          <Col className="title_sponsors">
            <Img
              id="img_polygon"
              src={polygon}
              onClick={() => {
                window.location.href = "https://polygon.technology/";
              }}
            />
          </Col>
          <Col className="title_sponsors">
            <Img
              id="img_wb"
              src={wb}
              onClick={() => {
                window.location.href = "https://wandb.ai/site";
              }}
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
          <div className="mobile_heading_sponsor">
            <h2 className="subheading" id="mobile" data-content="Power">
              Power
            </h2>
            <h2 className="subheading" id="mobile" data-content="Sponsors">
              Sponsors
            </h2>
          </div>
          <Col className="power_sponsors">
            <Img
              id="img_tezos"
              src={tezos}
              onClick={() => {
                window.location.href = "https://tezos.com";
              }}
            />
          </Col>
          <Col className="power_sponsors">
            <Img
              id="img_celo"
              src={celo}
              onClick={() => {
                window.location.href = "https://celo.org ";
              }}
            />
          </Col>
          <Col className="power_sponsors">
            <Img
              id="img_filecoin"
              src={filecoin}
              onClick={() => {
                window.location.href = "https://filecoin.io ";
              }}
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
          <div className="mobile_heading_sponsor">
            <h2 className="subheading" id="mobile" data-content="Associate">
              Associate
            </h2>
            <h2 className="subheading" id="mobile" data-content="Sponsors">
              Sponsors
            </h2>
          </div>
          <Col className="associate_sponsors">
            <Img
              id="img_gmc"
              src={gmc}
              onClick={() => {
                window.location.href = "https://givemycertificate.com";
              }}
            />
          </Col>
          <Col className="associate_sponsors">
            <Img
              id="img_taskade"
              src={taskade}
              onClick={() => {
                window.location.href = "https://www.taskade.com";
              }}
            />
          </Col>
          <Col className="associate_sponsors">
            <Img
              id="img_hhe"
              src={hhe}
              onClick={() => {
                window.location.href = "https://www.henryharvin.com";
              }}
            />
          </Col>
          <Col className="associate_sponsors">
            <Img
              id="img_bal"
              src={bal}
              onClick={() => {
                window.location.href = "https://balsamiq.com";
              }}
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
          <div className="mobile_heading_sponsor">
            <h2 className="subheading" id="mobile" data-content="Outreach">
              Outreach
            </h2>
          </div>
          <Col>
            <Img
              id="img_gdsc_bu"
              src={gdsc_bu}
              onClick={() => {
                window.location.href =
                  "https://gdsc.community.dev/bennett-university-greater-noida/";
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
