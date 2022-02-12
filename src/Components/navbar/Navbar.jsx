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
    const script = document.createElement('script');
    script.src = 'navbar.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // }
}, []);

  return (
      <div className="nav-bar" id="customnavbar">
        <span className="navbar-chips">Home</span>
        <span className="navbar-chips">About Us</span>
        <span className="navbar-chips">Guidelines</span>
        <span className="navbar-chips">Problem Statements</span>
        <span className="navbar-chips">Sponsors</span>
        <span className="navbar-chips">Speakers</span>
        <span className="navbar-chips">Prizes</span>
      </div>
  );
};

export default Navbar1;
