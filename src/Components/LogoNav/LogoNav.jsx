import React from "react";
import tel from "./assets/tel_aviv.png";
import dsc from "./assets/dsc.png";
import ti from "./assets/ti.png";
import meity from "./assets/meity.png";
import step from "./assets/step.png";

export default function Nav() {
  return (
    <div style={{ paddingTop: "1rem", width: "100vw" }}>
      <div
        className="nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 5rem 2rem 5rem",
        }}
      >
        <div className="nav-item">
          {/* <a href="#"> */}
          <img
            src={tel}
            alt=""
            style={{ objectFit: "contain" }}
            height="80px"
            width="140px"
          />
          {/* </a> */}
        </div>
        <div className="nav-item" style={{ transform: "translateX(-50px)" }}>
          {/* <a href="#"> */}
          <img
            src={meity}
            style={{
              objectFit: "contain",
              transform: "scale(1.5)",
              position: "relative",
              bottom: "45px",
            }}
            alt=""
            height="200px"
            width="200px"
          />
          {/* </a> */}
        </div>
        <div className="nav-item" style={{ transform: "translateX(-50px)" }}>
          {/* <a href="#"> */}
          <img
            src={dsc}
            style={{ objectFit: "contain" }}
            alt=""
            height="80px"
            width="530px"
          />
          {/* </a> */}
        </div>
        <div className="nav-item" style={{ transform: "translateX(-50px)" }}>
          {/* <a> */}
          <img
            src={step}
            style={{
              objectFit: "contain",
              transform: "scale(1.5)",
              position: "relative",
              bottom: "45px",
            }}
            alt=""
            height="200px"
            width="200px"
          />
          {/* </a> */}
        </div>
        <div className="nav-item">
          {/* <a href="#"> */}
          <img
            src={ti}
            alt=""
            style={{ objectFit: "contain" }}
            height="80px"
            width="60px"
          />
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}
