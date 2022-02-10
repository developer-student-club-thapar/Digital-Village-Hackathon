import React from "react";
import spn from "./img.png";
import styled from "@emotion/styled";

const SponsorsWrapper = styled.div`
  background-color: black;
  padding-bottom: 3rem;
`;
const SponsorHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleDiv = styled.div`
  @media (max-width: 850px) {
    background-color: #282a31;
    width: 100%;
    text-align: center;
  }
`;

const Title = styled.h1`
  background-color: #282a31;
  padding: 2.5rem 5rem;
  color: #08bd04;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  text-shadow: 2px 2px white;

  @media (max-width: 850px) {
    background-color: inherit;
    width: 100%;
  }
`;

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

function SponsorsWrapperMain() {
  return (
    <SponsorsWrapper>
      <SponsorHeading>
        <SponsorSVG src={spn} />
        <TitleDiv>
          <Title>Sponsors</Title>
        </TitleDiv>
      </SponsorHeading>
      <SponsorsCard>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, modi.
        Laboriosam, facilis quisquam voluptas vel delectus pariatur quam error
        expedita reprehenderit, cupiditate neque mollitia commodi exercitationem
        similique! Quisquam, qui ab. */}
      </SponsorsCard>
    </SponsorsWrapper>
  );
}

export default SponsorsWrapperMain;
