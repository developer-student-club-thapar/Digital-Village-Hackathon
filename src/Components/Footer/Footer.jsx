import React, { Fragment } from "react";
// import Footer from "../components/footer";
// import chet from "../components/logo.png";

export function FooterContainer() {
  return (
    <Fragment>
      <div
        className="container"
        style={{
          padding: "80px 60px",
          background: "#282A31",
        }}>
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
          {/* <img
            src={chet}
            style={{
              display: "flex",
              justifyContent: "left",
              position: "relative",
              top: "-280px",
              left: "-200px",
              width: "700px",
              height: "700px",
            }}
          /> */}
          {/* <Footer.Column>
            <Footer.Title className="Quick Links">Quick Links</Footer.Title>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Home</Footer.Link>
            <Footer.Link href="#">Guidelines</Footer.Link>
            <Footer.Link href="#">Problem Statements</Footer.Link>
            <Footer.Link href="#">Register</Footer.Link>
            <Footer.Link href="#">Submit</Footer.Link>
          </Footer.Column>
          <Footer.Column></Footer.Column> */}
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
            <icons
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
                class="fab fa-linkedin"
                style={{
                  fontSize: "26px",
                  cursor: "pointer",
                }}
              ></i>
              <i
                class="fab fa-instagram"
                style={{
                  fontSize: "26px",
                  cursor: "pointer",
                }}
              ></i>
              <i
                class="fab fa-discord"
                style={{
                  fontSize: "26px",
                  cursor: "pointer",
                }}
              ></i>
            </icons>
          </div>
        </div>
        </div>
      </div>
    </Fragment>
  );
}
