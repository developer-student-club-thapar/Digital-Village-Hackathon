import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import "./sidebar.css";
import close from "./Logos/close.svg";
import menu from "./Logos/menu.svg";

function SideNav() {
  // const [pageY, setpageY] = useState(0);
  const [showNav, setshowNav] = useState(false);
  const navbar = useRef(null);
  const ham = useRef(null);
  const tl = gsap.timeline();

  const openNav = () => {
    // tl.from(navbar.current, {
    //   transform: "translateX(100%)",
    // })
    tl.to(navbar.current, {
      duration: 0.5,
      transform: "translateX(0)",
      // width: "100%",
      ease: "power1.in",
    });
  };

  const closeNav = () => {
    // tl.from(navbar.current, {
    //   transform: "translateX(0)",
    // })
    tl.to(navbar.current, {
      duration: 0.5,
      transform: "translateX(100%)",
      ease: "power1.in",
    });
  };

  const handleShowNav = () => {
    // tl.from(ham.current, {
    //   transform: "translateY(-250%)",
    //   ease: "power1.out",
    // })
    tl.to(ham.current, {
      duration: 0.1,
      transform: "translateY(0)",
      ease: "power1.out",
    });
  };
  const handleHideNav = () => {
    // tl.from(ham.current, {
    //   transform: "translateY(0)",
    //   ease: "power1.out",
    // })
    tl.to(ham.current, {
      duration: 0.1,
      transform: "translateY(-250%)",
      ease: "power1.out",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setshowNav(true);
      } else {
        setshowNav(false);
      }
    });
    return window.removeEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setshowNav(true);
      } else {
        setshowNav(false);
      }
    });
  }, []);

  useEffect(() => {
    // console.log(showNav);
    if (showNav) {
      handleShowNav();
    } else {
      handleHideNav();
    }
  }, [showNav]);

  return (
    <>
      {/* {showNav && (
        <span className="ham" onClick={openNav}>
          <img src={menu} ref={ham} alt="" />
        </span>
      )} */}
      <span className="ham" onClick={openNav}>
        <img src={menu} ref={ham} alt="" />
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
          <a href="#timeline" onClick={closeNav}>
            Timeline
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
          <a href="#prizes" onClick={closeNav}>
            Prizes
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
