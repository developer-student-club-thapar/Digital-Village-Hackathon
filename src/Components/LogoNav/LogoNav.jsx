import React from "react";
import tel from "./assets/tel_aviv.png";
import dsc from "./assets/dsc.png";
import ti from "./assets/ti.png";
import meity from "./assets/meity.png";
import step from "./assets/step.png";
import styled from "@emotion/styled";

const NavDiv = styled.div`
  padding-top: 1rem;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 5rem 2rem 5rem;
  @media (max-width: 370px) {
    width: 280px !important;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 450px) {
    width: 350px;
    margin: 0;
    padding: 0;
  }
`;
const LogoDiv = styled.div`
  transform: translateX(-50px);
  @media (max-width: 1400px) {
    display: none;
  }
`;

const DSCLogo = styled.div`
  transform: translateX(-50px);
  @media (max-width: 1400px) {
    width: 100%;
    margin: 0 0 10vh 2rem;
  }
  @media (max-width: 350px) {
    width: 280px;
    position: relative;
    // left: 60px;
    margin: 0 0 10vh 0;
  }
  @media (max-width: 450px) {
    width: 100%;
    position: relative;
    left: 60px;
    margin: 0 0 10vh 0;
  }
`;

const Dsclog = styled.img`
  @media (max-width: 600px) {
    width: 100% !important;
  }
  @media (max-width: 370px) {
    width: 280px !important;
  }
`;

export default function Nav() {
  return (
    <NavDiv>
      <LogoDiv className="nav-item">
        {/* <a href="#"> */}
        <img
          src={tel}
          alt=""
          style={{
            objectFit: "contain",
            position: "relative",
            top: "5px",
            left: "15px",
          }}
          height="90px"
          width="140px"
        />
        {/* </a> */}
      </LogoDiv>
      <LogoDiv className="nav-item">
        {/* <a href="#"> */}
        <img
          src={meity}
          style={{
            objectFit: "contain",
            transform: "scale(1.5)",
            position: "relative",
            bottom: "45px",
          }}
          alt=""
          height="200px"
          width="200px"
        />
        {/* </a> */}
      </LogoDiv>
      <DSCLogo className="nav-item">
        {/* <a href="#"> */}
        <Dsclog
          src={dsc}
          style={{ objectFit: "contain" }}
          alt=""
          height="80px"
          width="530px"
        />
        {/* </a> */}
      </DSCLogo>
      <LogoDiv className="nav-item">
        {/* <a> */}
        <img
          src={step}
          style={{
            objectFit: "contain",
            transform: "scale(1.5)",
            position: "relative",
            bottom: "45px",
          }}
          alt=""
          height="200px"
          width="200px"
        />
        {/* </a> */}
      </LogoDiv>
      <LogoDiv className="nav-item">
        {/* <a href="#"> */}
        <img
          src={ti}
          alt=""
          style={{
            objectFit: "contain",
            position: "relative",
            top: "5px",
            left: "15px",
          }}
          height="80px"
          width="60px"
        />
        {/* </a> */}
      </LogoDiv>
    </NavDiv>
  );
}
