import React from "react";

function Footer() {
  return (
    <>
      <div
        className="container"
        style={{
          padding: "80px 60px",
          background: "#282A31",
        }}
      ></div>
      <div
        className="wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1000px",
          margin: "0 auto",
          // background:"red",
          flexDirection: "column",
        }}
      >
        <div
          className="Row"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridGap: "20px",
          }}
        >
          <div
            className="footer-column"
            style={{
              position: "relative",
              right: "-400px",
              top: "-200px",
            }}
          >
            <div
              className="Title"
              style={{
                fontSize: "24px",
                color: "#fff",
                marginBottom: "40px",
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "Nunito Sans, sans-serif",
              }}
            >
              Contact Us
            </div>
            <div
              className="icons"
              style={{
                color: "white",
                display: "flex",
                position: "relative",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <i
                className="fab fa-linkedin"
                style={{
                  fontSize: "26px",
                  cursor: "pointer",
                }}
              ></i>
              <i
                className="fab fa-instagram"
                style={{
                  fontSize: "26px",
                  cursor: "pointer",
                }}
              ></i>
              <i
                className="fab fa-discord"
                style={{
                  fontSize: "26px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
