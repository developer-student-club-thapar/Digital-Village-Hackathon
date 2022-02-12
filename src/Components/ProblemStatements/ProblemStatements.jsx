import React from "react";
import grid from "./assets/grid.svg";
import StatementCard from "./StatementCard.jsx";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #072227;
  padding: 2rem 0;
`;

const StyledImg = styled.img`
  position: relative;
  top: 2rem;
  left: 3.6rem;
  height: 35px;
  @media (max-width: 1200px) {
    height: 30px;
    top: 1.5rem;
    left: 2.7rem;
  }
  @media (max-width: 950px) {
    height: 25px;
    top: 1.2rem;
    left: 2.05rem;
  }
`;

const HeadingNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 1rem 1rem 1rem;
  margin-bottom: 2.5rem;
`;

const HeadingTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: #08bd04;
  text-shadow: 4px 4px #000;
  line-height: 1.2;
  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 950px) {
    font-size: 2rem;
  }
`;

function ProblemStatements() {
  return (
    <>
      <Wrapper>
        <HeadingNav>
          <StyledImg src={grid} alt="" />
          <h1 className="main-heading" data-content='ProblemStatement'>ProblemStatement</h1>
        </HeadingNav>
        <StatementCard />
      </Wrapper>
    </>
  );
}

export default ProblemStatements;
