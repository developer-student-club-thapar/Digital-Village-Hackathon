import React from "react";
import grid from "./grid.svg";
import problemStatements from "./statements.js";
import StatementCard from "./StatementCard.jsx";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #072227;
`;

const HeadingNav = styled.div`
  display: flex;
`;

const HeadingTitle = styled.h1`
  color: "#08BD04";
`;

const StatementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ProblemStatements() {
  return (
    <>
      <Wrapper>
        <HeadingNav>
          <img src={grid} alt="" />
          <HeadingTitle>Problem Statement</HeadingTitle>
        </HeadingNav>
        <StatementsWrapper>
          {problemStatements.map((statement, index) => (
            <StatementCard key={index} statement={statement} />
          ))}
        </StatementsWrapper>
      </Wrapper>
    </>
  );
}

export default ProblemStatements;
