import React, { useState } from "react";
import grid from "./assets/grid.svg";
import svg from "./assets/leaves.png";
import arrow from "./assets/arrow.svg";
import selectedStatements from "./assets/statements.js";
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
  cursor: pointer;
  &:hover {
    border: 2px solid #08bd04;
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const Title = styled.h5`
  color: white;
  font-size: 1rem;
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
  @media (max-width: 950px) {
    font-size: 0.8rem;
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

const StatementsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 3rem;
  column-gap: 4%;
  margin: 2rem 4rem;
  justify-content: space-around;
`;

const DetailedView = styled.div`
  padding: 1rem 4rem 2rem 4rem;
  margin: 3rem;
  border-radius: 1rem;
  border: 3px solid #08bd04;
  @media (max-width: 450px) {
    padding: 1rem 1rem 1rem 1rem;
    margin: 1rem;
    border-radius: 1rem;
    border: 3px solid #08bd04;
  }
  @media (max-width: 800px) {
    padding: 1rem 1rem 1rem 2rem;
    margin: 1rem;
    border-radius: 1rem;
    border: 3px solid #08bd04;
  }
`;

const DetailedHeading = styled.h3`
  color: #08bd04;
  font-size: 1.5rem;
  padding: 1rem 0;
  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

const DetailedSubHeadings = styled.h5`
  color: #08bd04;
  font-size: 1.3rem;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

const DetailedSubText = styled.p`
  color: white;
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`;

const DetailedNav = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const BackButton = styled.img`
  height: 25px;
  cursor: pointer;
`;

const Description = styled.div`
  padding: 1rem 0;
`;

function StatementCard() {
  const [selectedStatement, setSelectedStatement] = useState(null);
  const [showDetailedView, setShowDetailedView] = useState(false);
  if (!showDetailedView) {
    return (
      <StatementsWrapper>
        {selectedStatements.map((statement, index) => (
          <CardWrapper
            key={index}
            onClick={() => {
              setSelectedStatement(statement);
              setShowDetailedView(!showDetailedView);
            }}
          >
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
        ))}
      </StatementsWrapper>
    );
  } else {
    return (
      <DetailedView>
        <DetailedNav>
          <BackButton
            src={arrow}
            alt="arrow_left"
            onClick={() => {
              setShowDetailedView(!showDetailedView);
            }}
          />
          <DetailedHeading>{`Statement Number ${selectedStatement.id}`}</DetailedHeading>
        </DetailedNav>
        <DetailedHeading>{selectedStatement.title}</DetailedHeading>
        <Description>
          <DetailedSubHeadings>Description:- </DetailedSubHeadings>
          <DetailedSubText>{selectedStatement.content.des}</DetailedSubText>
        </Description>
        <Description>
          <DetailedSubHeadings>Data:- </DetailedSubHeadings>
          <DetailedSubText>{selectedStatement.content.data}</DetailedSubText>
        </Description>
        <Description>
          <DetailedSubHeadings>Link:- </DetailedSubHeadings>
          {/* <a
                    herf={selectedStatement.content.link}
                    target="_blank"
                    rel="noreferrer"
                  > */}
          <DetailedSubText>{selectedStatement.content.link}</DetailedSubText>
          {/* </a> */}
        </Description>
        <Description>
          <DetailedSubHeadings>Evaluation:- </DetailedSubHeadings>
          <DetailedSubText>{selectedStatement.content.eval}</DetailedSubText>
        </Description>
      </DetailedView>
    );
  }
}

export default StatementCard;
