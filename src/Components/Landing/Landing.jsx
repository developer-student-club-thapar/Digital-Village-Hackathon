import React from "react";
import LogoNav from "../LogoNav/LogoNav";
import "./landing.css";
const Landing = () => {
  return (
    <div className="landing" id="home">
      <LogoNav />
      <h1>DIGITAL VILLAGE </h1>
      <h1>HACKATHON</h1>
      <h3> Start Date to End Date</h3>
      <div className="buttons">
        <button>Register</button> <button>Submit</button>
      </div>
    </div>
  );
};

export default Landing;
