import React from "react";
import Background from "./Background";
import Imgtop from "./Heading-img";
import Title from "./Heading";
import Title2 from "./Heading2";
import Rectangle from "./Rectangle";
import chet from "./chet.png";

const Sponsor = () => {
  return (
    <React.Fragment>
      <Background />
      <Imgtop src={chet} alt="Imgtop" />
      <Title>Sponsor</Title>
      <Title2>Sponsor</Title2>
      <Rectangle />
    </React.Fragment>
  );
};

export default Sponsor;
