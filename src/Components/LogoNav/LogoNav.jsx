import React from "react";
import tel from "./assets/tel_aviv.png";
import dsc from "./assets/dsc.png";
import ti from "./assets/ti.png";
import meity from "./assets/meity.png";
import step from "./assets/step.png";
import styled from "@emotion/styled";

const NavDiv = styled.div`
  // @media (max-width: 1400px) {
  //   visibility: hidden;
  // }
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
`;

const Dsclog = styled.img`
  @media (max-width: 600px) {
    width: 100% !important;
  }
`;

export default function Nav() {
  return (
    <NavDiv style={{ paddingTop: "1rem", width: "100vw" }}>
      <div
        className="nav"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "1rem 5rem 2rem 5rem",
        }}
      >
        <LogoDiv className="nav-item">
          {/* <a href="#"> */}
          <img
            src={tel}
            alt=""
            style={{ objectFit: "contain" }}
            height="80px"
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
            style={{ objectFit: "contain" }}
            height="80px"
            width="60px"
          />
          {/* </a> */}
        </LogoDiv>
      </div>
    </NavDiv>
  );
}
