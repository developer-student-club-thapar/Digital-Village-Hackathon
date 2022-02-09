import React from "react";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  height: 30vh;
  width: 20vw;
  min-width: 200px;
  min-height: 300px;
  border-radius: 1rem;
  border: 1px solid #08bd04;
`;

const TitleWrapper = styled.div``;

const Title = styled.h5`
  color: white;
`;

function StatementCard({ statement }) {
  return (
    <CardWrapper>
      {/* <img src={grid} alt="" /> */}
      <TitleWrapper>
        <Title>{statement.title}</Title>
      </TitleWrapper>
    </CardWrapper>
  );
}

export default StatementCard;
