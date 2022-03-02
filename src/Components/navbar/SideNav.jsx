import React, { useRef } from "react";
import { gsap } from "gsap";
import "./sidebar.css";
import close from "./Logos/close.svg";
import menu from "./Logos/menu.svg";

function SideNav() {
  const navbar = useRef(null);
  const tl = gsap.timeline();

  const openNav = () => {
    tl.from(navbar.current, {
      transform: "translateX(100%)",
    }).to(navbar.current, {
      duration: 0.5,
      transform: "translateX(0)",
      // width: "100%",
      ease: "power1.in",
    });
  };

  const closeNav = () => {
    tl.from(navbar.current, {
      transform: "translateX(0)",
    }).to(navbar.current, {
      duration: 0.5,
      transform: "translateX(100%)",
      ease: "power1.in",
    });
  };

  return (
    <>
      <span className="ham" onClick={openNav}>
        <img src={menu} alt="" />
      </span>
      <div className="navwrapper" ref={navbar}>
        <span onClick={closeNav}>
          <img src={close} alt="" />
        </span>
        <div className="menudiv">
          <h1 className="main-heading" data-content="Menu">
            Menu
          </h1>
          <a href="#home" onClick={closeNav}>
            Home
          </a>
          <a href="#about" onClick={closeNav}>
            About Us
          </a>
          <a href="#guidelines" onClick={closeNav}>
            Guidelines
          </a>
          <a href="#problem" onClick={closeNav}>
            Problem Statements
          </a>
          <a href="#sponsors" onClick={closeNav}>
            Sponsors
          </a>
          <a href="#organisers" onClick={closeNav}>
            Organisers
          </a>
          <a href="#judges" onClick={closeNav}>
            Judges
          </a>
        </div>
      </div>
    </>
  );
}

export default SideNav;
