import React from "react";
import "./speakers.css";
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dots from "./dots.png"

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="speakers">
        <h1 className="main-heading" data-content="Speakers">Speakers</h1>
        <img className="dots" src={dots} alt=""/>
          {/* <div className="card-group"> */}
            <Slider {...settings}>
              <div className="card">
                <img src={"https://picsum.photos/400/300"} alt={"Speaker-1 image"}/>
                <img className="dots-cards" src={dots} alt=""/>
                <div className="card-body">
                  <h5>Lorem Ipsum</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed elit quam. Nulla rhoncus euismod dolor 
                  elementum eleifend.</p>
                </div>
              </div>
              <div className="card">                
                <img src={"https://picsum.photos/400/300"} alt={"Speaker-2 image"}/>
                <img className="dots-cards" src={dots} alt=""/>
                <div className="card-body">
                  <h5>Lorem Ipsum</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed elit quam. Nulla rhoncus euismod dolor 
                  elementum eleifend.</p>
                </div>
              </div>
              <div className="card">
                <img src={"https://picsum.photos/400/300"} alt={"Speaker-3 image"}/>
                <img className="dots-cards" src={dots} alt=""/>
                <div className="card-body">
                  <h5>Lorem Ipsum</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed elit quam. Nulla rhoncus euismod dolor 
                  elementum eleifend.</p>
                </div>
              </div>
              <div className="card">
                <img src={"https://picsum.photos/400/300"} alt={"Speaker-3 image"}/>
                <div className="card-body">
                  <h5>Lorem Ipsum</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed elit quam. Nulla rhoncus euismod dolor 
                  elementum eleifend.</p>
                </div>
              </div>
              <div className="card">
                <img src={"https://picsum.photos/400/300"} alt={"Speaker-3 image"}/>
                <div className="card-body">
                  <h5>Lorem Ipsum</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed elit quam. Nulla rhoncus euismod dolor 
                  elementum eleifend.</p>
                </div>
              </div>
              <div className="card">
                <img src={"https://picsum.photos/400/300"} alt={"Speaker-3 image"}/>
                <div className="card-body">
                  <h5>Lorem Ipsum</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed elit quam. Nulla rhoncus euismod dolor 
                  elementum eleifend.</p>
                </div>
              </div>
            </Slider>
          {/* </div> */}
      </div>
    );
  }
}
