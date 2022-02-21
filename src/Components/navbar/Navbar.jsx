import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import "./navbar.css";

const Navbar1 = () => {
  // const [scrolled, setScrolled] = useState(false);
  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   // console.log(offset);
  //   if (offset > 200) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // });
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "navbar.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // }
  }, []);

  return (
    <div className="nav-bar" id="customnavbar">
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#guidelines">Guidelines</a>
      <a href="#problem">Problem Statements</a>
      <a href="#sponsors">Sponsors</a>
      <a href="#speakers">Speakers</a>
      {/* <span className="navbar-chips">
        <a href="#guidelines">Prizes</a>
      </span> */}
    </div>
  );
};

export default Navbar1;
