import React from "react";
import tel from "./assets/tel_aviv.png";
import ti from "./assets/ti.png";
import meity from "./assets/meity.png";
import step from "./assets/step.png";
import styled from "@emotion/styled";

const LogoSectionWrapper = styled.div`
  display: none;
  background-color: #072227;
  padding: 2rem 0;
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

function LogoSection() {
  return (
    <LogoSectionWrapper>
      <TitleDiv>
        <h2 className="main-heading" data-content="Organisers">
          Organisers
        </h2>
      </TitleDiv>
      <LogoDiv>
        <Logo>
          {/* <a href="#"> */}
          <StyledImg1
            src={tel}
            alt=""
            style={{ objectFit: "contain" }}
            // height="80px"
            // width="140px"
          />
          {/* </a> */}
        </Logo>
        <Logo>
          {/* <a href="#"> */}
          <StyledImg2
            src={meity}
            style={{
              objectFit: "contain",
              transform: "scale(1.5)",
              position: "relative",
              bottom: "45px",
            }}
            alt=""
            // height="200px"
            // width="200px"
          />
          {/* </a> */}
        </Logo>
        <Logo>
          {/* <a> */}
          <StyledImg3
            src={step}
            style={{
              objectFit: "contain",
              transform: "scale(1.5)",
              position: "relative",
              bottom: "45px",
            }}
            alt=""
            // height="200px"
            // width="200px"
          />
          {/* </a> */}
        </Logo>
        <Logo>
          {/* <a href="#"> */}
          <StyledImg4
            src={ti}
            alt=""
            style={{ objectFit: "contain" }}
            // height="80px"
            // width="60px"
          />
          {/* </a> */}
        </Logo>
      </LogoDiv>
    </LogoSectionWrapper>
  );
}

export default LogoSection;
