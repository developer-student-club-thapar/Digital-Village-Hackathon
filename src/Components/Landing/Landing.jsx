import React from "react";
import LogoNav from "../LogoNav/LogoNav";
import CarouselNav from "../LogoNav/CarouselNav";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing" id="home">
      <LogoNav />
      <h1>DIGITAL VILLAGE </h1>
      <h1>HACKATHON</h1>
      <h4> 19th March 2022 - 20th March 2022</h4>
      <div className="buttons">
        <button>Register</button> <button>Submit</button>
      </div>
      {/* <CarouselNav /> */}
    </div>
  );
};

export default Landing;
