import React from "react";
import grid from "./grid.svg";
import svg from "./leaves.png";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  height: 30vh;
  width: 20vw;
  min-width: 200px;
  min-height: 350px;
  max-width: 350px;
  flex-grow: 1;
  border-radius: 1rem;
  border: 3px solid #08bd04;
`;

const CardContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  flex-direction: column;
  justify-content: space-between;
`;
const TitleWrapper = styled.div`
  text-align: center;
  margin: 0.5rem;
`;

const Title = styled.h5`
  color: white;
  font-size: 1rem;
  @media (max-width: 1200px) {
    font-size: 0.9rem;
  }
  @media (max-width: 950px) {
    font-size: 0.7rem;
  }
`;

const StyledSvg = styled.img`
  height: 100px;
  width: 100px;
`;

const StyledImg = styled.img`
  position: relative;
  top: 2rem;
  right: 1.3rem;
  height: 35px;
`;

function StatementCard({ statement }) {
  return (
    <CardWrapper>
      <StyledImg src={grid} alt="" />
      <CardContentWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "centers",
          }}
        >
          <StyledSvg src={svg} alt="" />
        </div>
        <TitleWrapper>
          <Title>{statement.title}</Title>
        </TitleWrapper>
      </CardContentWrapper>
    </CardWrapper>
  );
}

export default StatementCard;
