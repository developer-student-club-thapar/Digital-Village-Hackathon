import React from "react";
import LogoNav from "../LogoNav/LogoNav";
import "./landing.css";
const Landing = () => {
  return (
    <div className="landing">
      <LogoNav />
      <h1>DIGITAL VILLAGE </h1>
      <h1>HACKATHON</h1>
      <h3> Start Date to End Date</h3>
      <button>Register</button> <button>Submit</button>
    </div>
  );
};

export default Landing;
