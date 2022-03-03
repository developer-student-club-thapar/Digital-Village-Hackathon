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

// const Title = styled.h1`
//   background-color: #282a31;
//   padding: 2.5rem 5rem;
//   color: #08bd04;
//   font-size: 3rem;
//   font-weight: bold;
//   letter-spacing: 0.2rem;
//   text-shadow: 2px 2px white;

//   @media (max-width: 850px) {
//     background-color: inherit;
//     width: 100%;
//   }
// `;

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
          <h2 className="spHeading main-heading" data-content="Title Sponsors">
            Title Sponsors
          </h2>
          <Col>
            <Img
              src={devfolio}
              onClick={() => {
                window.location.href = "https://devfolio.co";
              }}
            />
          </Col>
          <Col>
            <Img
              src={polygon}
              onClick={() => {
                window.location.href = "https://polygon.technology/";
              }}
            />
          </Col>
        </Row>
        <Row>
          <h2 className="spHeading main-heading " data-content="Power Sponsors">
            Power Sponsors
          </h2>
          <Col>
            <Img
              src={tezos}
              onClick={() => {
                window.location.href = "https://tezos.com";
              }}
            />
          </Col>
          <Col>
            <Img
              src={celo}
              onClick={() => {
                window.location.href = "https://celo.org ";
              }}
            />
          </Col>
          <Col>
            <Img
              src={filecoin}
              onClick={() => {
                window.location.href = "https://filecoin.io ";
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
