import React from "react";
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import Slider from "react-slick";
import "./speakers1.css";
import grid from "./dots.png";

const Speakers2 = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 800,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const settings2 = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <Fragment>
      <div className="speakers-container">
        <h2 className="section-heading main-heading">Speakers</h2>
        <Row>
          {/* <Col lg={4} md={4} className="speakers-col">
          <img src={speaker} alt="speaker-img" />
        </Col> */}
          <Col className="speakersScreen" lg={11} md={8} xs={12}>
            <Slider {...settings}>
              {/* <Col xs={12} sm={6} md={6} className="speaker-col">
                    <div className='speaker-item'>
                    <i></i>
                    <h4>Social Media Website</h4>
                    <p>speaker description</p>
                    </div>
                </Col> */}
              <Col xs={12} sm={6} md={6} lg={4} className="speaker-col">
                <div className="speaker-item">
                  <i></i>
                  <img
                    src={"https://picsum.photos/400/300"}
                    alt={"Speaker-1 image"}
                  />
                  <img className="dots-cards" src={grid} alt="" />
                  <h4>Lorem Ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sed elit quam. Nulla rhoncus euismod dolor elementum
                    eleifend.
                  </p>
                  <hr />
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={4} className="speaker-col">
                <div className="speaker-item">
                  <i></i>
                  <img
                    src={"https://picsum.photos/400/300"}
                    alt={"Speaker-1 image"}
                  />
                  <img className="dots-cards" src={grid} alt="" />
                  <h4>Lorem ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sed elit quam. Nulla rhoncus euismod dolor elementum
                    eleifend.
                  </p>
                  <hr />
                  <h6></h6>
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={4} className="speaker-col">
                <div className="speaker-item">
                  <i></i>
                  <img
                    src={"https://picsum.photos/400/300"}
                    alt={"Speaker-1 image"}
                  />
                  <img className="dots-cards" src={grid} alt="" />
                  <h4>Lorem ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sed elit quam. Nulla rhoncus euismod dolor elementum
                    eleifend.
                  </p>
                  <hr />
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={4} className="speaker-col">
                <div className="speaker-item">
                  <i></i>
                  <img
                    src={"https://picsum.photos/400/300"}
                    alt={"Speaker-1 image"}
                  />
                  <img className="dots-cards" src={grid} alt="" />
                  <h4>Lorem ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sed elit quam. Nulla rhoncus euismod dolor elementum
                    eleifend.
                  </p>
                  <hr />
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={4} className="speaker-col">
                <div className="speaker-item">
                  <i></i>
                  <img
                    src={"https://picsum.photos/400/300"}
                    alt={"Speaker-1 image"}
                  />
                  <img className="dots-cards" src={grid} alt="" />
                  <h4>Lorem Ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sed elit quam. Nulla rhoncus euismod dolor elementum
                    eleifend.
                  </p>
                  <hr />
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={4} className="speaker-col">
                <div className="speaker-item">
                  <i></i>
                  <img
                    src={"https://picsum.photos/400/300"}
                    alt={"Speaker-1 image"}
                  />
                  <img className="dots-cards" src={grid} alt="" />
                  <h4>Lorem Ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sed elit quam. Nulla rhoncus euismod dolor elementum
                    eleifend.
                  </p>
                  <hr />
                </div>
              </Col>
            </Slider>

            {/* <Col xs={12} sm={6} md={6} className="speaker-col">
                    <div className='speaker-item'>
                    <i></i>
                    <h4>lorem Ipsum</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                      sed elit quam. Nulla rhoncus euismod dolor elementum eleifend.</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} className="speaker-col">
                <div className='speaker-item'>
                    <i></i>
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sed elit quam. Nulla rhoncus euismod dolor elementum eleifend.
                    </p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} className="speaker-col">
                <div className='speaker-item'>
                    <i></i>
                    <h4>Multi-Container Docker App</h4>
                    <p>speaker description</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} className="speaker-col">
                <div className='speaker-item'>
                    <i></i>
                    <h4>Discord Bot</h4>
                    <p>speaker description</p>
                    </div>  
                </Col> */}

            {/* <a
              href="https://github.com/Samikmalhotra?tab=repositories"
              target="_blank"
            >
              <Button className="speaker-btn">More speakers</Button>
            </a> */}
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Speakers2;
