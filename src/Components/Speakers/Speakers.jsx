import React from "react";
import "./speakers.css";
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import grid from "./dots.png";

const HeadingNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1rem 0 1rem;
  margin-bottom: 2.5rem;
`;

const HeadingTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: #08bd04;
  text-shadow: 4px 4px #000;
  line-height: 1.2;
  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 950px) {
    font-size: 2rem;
  }
`;

const StyledImg = styled.img`
  position: relative;
  left: 3.3rem;
  top: 2rem;
  height: 35px;
  @media (max-width: 1200px) {
    height: 30px;
    top: 1.5rem;
    left: 2.7rem;
  }
  @media (max-width: 950px) {
    height: 25px;
    top: 1.2rem;
    left: 2.05rem;
  }
`;

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      // centerMode: true,
      draggable: true,
      swipe: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="speakers">
        <HeadingNav>
          {/* <StyledImg src={grid} alt="" /> */}
          <h1 className="main-heading" data-content="Speakers">
            Speakers
          </h1>
        </HeadingNav>
        {/* <div className="card-group"> */}
        <Slider {...settings} style={{ margin: "0 5rem", maxWidth: "80%" }}>
          <div className="card">
            <img
              src={"https://picsum.photos/400/300"}
              alt={"Speaker-1 image"}
            />
            <img className="dots-cards" src={grid} alt="" />
            <div className="card-body">
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sed elit quam. Nulla rhoncus euismod dolor elementum eleifend.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={"https://picsum.photos/400/300"}
              alt={"Speaker-2 image"}
            />
            <img className="dots-cards" src={grid} alt="" />
            <div className="card-body">
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sed elit quam. Nulla rhoncus euismod dolor elementum eleifend.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={"https://picsum.photos/400/300"}
              alt={"Speaker-3 image"}
            />
            <img className="dots-cards" src={grid} alt="" />
            <div className="card-body">
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sed elit quam. Nulla rhoncus euismod dolor elementum eleifend.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={"https://picsum.photos/400/300"}
              alt={"Speaker-3 image"}
            />
            <img className="dots-cards" src={grid} alt="" />
            <div className="card-body">
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sed elit quam. Nulla rhoncus euismod dolor elementum eleifend.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={"https://picsum.photos/400/300"}
              alt={"Speaker-3 image"}
            />
            <img className="dots-cards" src={grid} alt="" />
            <div className="card-body">
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sed elit quam. Nulla rhoncus euismod dolor elementum eleifend.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={"https://picsum.photos/400/300"}
              alt={"Speaker-3 image"}
            />
            <img className="dots-cards" src={grid} alt="" />
            <div className="card-body">
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sed elit quam. Nulla rhoncus euismod dolor elementum eleifend.
              </p>
            </div>
          </div>
        </Slider>
        {/* </div> */}
      </div>
    );
  }
}
