import React from "react";
import tel from "./assets/tel_aviv.png";
import dsc from "./assets/dsc.png";
import ti from "./assets/ti.png";
import meity from "./assets/meity.png";
import step from "./assets/step.png";
import Slider from "react-slick";
import styled from "@emotion/styled";

const NavDiv = styled.div`
  visibility: hidden;
  @media (max-width: 1400px) {
    visibility: visible;
  }
`;

const CarouselItem = styled.div`
  min-width: 600px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  "img" : {
    objectfit: "contain";
  }
`;

function CarouselNav() {
  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    slidesPerRow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <NavDiv>
        <Slider {...settings}>
          <CarouselItem>
            <img src={tel} height="80px" width="140px" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={meity} height="200px" width="200px" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={dsc} height="80px" width="530px" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={step} height="200px" width="200px" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={ti} height="80px" width="60px" alt="" />
          </CarouselItem>
        </Slider>
      </NavDiv>
    </>
  );
}

export default CarouselNav;
