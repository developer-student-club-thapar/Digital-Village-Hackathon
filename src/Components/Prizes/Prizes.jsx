import React from "react";
import styled from "@emotion/styled";
import { Row, Col } from "react-bootstrap";
import polygon from "../../images/polygon.png";
import tezos from "../../images/tezos.png";
import celo from "../../images/celo.png";
import filecoin from "../../images/filecoin.png";
import first from "./assets/first.png";
import second from "./assets/second.png";
import third from "./assets/third.png";

const PrizesWrapper = styled.div`
  background-color: black;
  padding-bottom: 3rem;
  padding-top: 2rem;
`;
const PrizesHeading = styled.div`
  display: flex;
  justify-content: center;
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

const PrizesSVG = styled.img`
  display: none;
  height: 350px;
  padding: 0 3rem;

  @media(min-width: 850px) {
    display: block;
`;

const PrizesCard = styled.div`
  min-height: 40vh;
  border-radius: 2rem;
  background: #072227;
  margin: 2rem 0rem;
  padding: 2rem;
  backdrop-filter: blur(100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#C8C8C8", endColorstr="#444444", GradientType=1 );
`;

const Img = styled.img`
  cursor: pointer;
  width: 100px;
`;

const PrizeAmt = styled.h2`
    margin: 50px auto;
    font-weight: 700;
    font-size: 2.5rem;
`;

const PrizeDesc = styled.p`
    font-size: 1.3rem;
    text-align: center;
    margin: 0px auto;
`;

const PrizeTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    margin: 0px auto;
`;


function Prizes() {
  return (
    <PrizesWrapper id="sponsors">
      <PrizesHeading>
        <TitleDiv>
          <h1
            className="main-heading"
            data-content="Prizes"
          >
            Prizes
          </h1>
        </TitleDiv>
      </PrizesHeading>
      <div className="prizes-div">
        <Row className="top-prizes">
        <Col md={4}>
            <PrizesCard classname= "prize-card" id="second">
                <Img
                src={second}
                />
                <PrizeAmt>Rs. 20,000</PrizeAmt>
            </PrizesCard>
          </Col>
          <Col md={4}>
            <PrizesCard classname= "prize-card" id="first">
                <Img
                src={first}
                />
                <PrizeAmt>Rs. 30,000</PrizeAmt>
            </PrizesCard>
          </Col>
          <Col md={4}>
            <PrizesCard classname= "prize-card">
                <Img
                src={third}
                />
                <PrizeAmt>Rs. 10,000</PrizeAmt>
            </PrizesCard>
          </Col>
          <Col md={6}>
            <PrizesCard classname= "prize-card">
                <PrizeAmt>
                    Rs. 5,000
                </PrizeAmt>
                <PrizeTitle>
                    Best First Year Team
                </PrizeTitle>
            </PrizesCard>
          </Col>
          <Col md={6}>
            <PrizesCard classname= "prize-card">
                <PrizeAmt>
                    Rs. 5,000
                </PrizeAmt>
                <PrizeTitle>
                    Best All Girls Team 
                </PrizeTitle>
            </PrizesCard>
          </Col>
        </Row>
        <Row>
          <h2 className="main-heading" data-content="Sponsor Prizes">
            Sponsor Prizes
          </h2>
          <Col md={6}>
            <PrizesCard classname= "prize-card">
                <Img
                src={polygon}
                onClick={() => {
                    window.location.href = "https://polygon.technology/";
                }}
                />
                <PrizeAmt>
                    Rs. 15,000
                </PrizeAmt>
                <PrizeDesc>
                    Prize for best hack built on Polygon
                </PrizeDesc>
            </PrizesCard>
          </Col>
          <Col md={6}>
            <PrizesCard classname= "prize-card">
                <Img
                src={tezos}
                onClick={() => {
                    window.location.href = "https://devfolio.co";
                }}
                />
                <PrizeAmt>
                    Rs. 20,000
                </PrizeAmt>
                <PrizeDesc>
                    Prize for best Dapp built on Tezos
                </PrizeDesc>
            </PrizesCard>
          </Col>
          <Col md={6}>
            <PrizesCard classname= "prize-card">
                <Img
                src={celo}
                onClick={() => {
                    window.location.href = "https://polygon.technology/";
                }}
                />
                <PrizeAmt>
                    Rs. 20,000
                </PrizeAmt>
                <PrizeDesc>
                    Prize for best Dapp built on Celo
                </PrizeDesc>
            </PrizesCard>
          </Col>
          <Col md={6}>
            <PrizesCard classname= "prize-card">
                <Img
                src={filecoin}
                onClick={() => {
                    window.location.href = "https://polygon.technology/";
                }}
                />
                <PrizeAmt>
                    Rs. 20,000
                </PrizeAmt>
                <PrizeDesc>
                    Prize for best use of IPFS and/or Filecoin
                </PrizeDesc>
            </PrizesCard>
          </Col>
        </Row>
      </div>
    </PrizesWrapper>
  );
}

export default Prizes;
