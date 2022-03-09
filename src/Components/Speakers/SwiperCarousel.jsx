import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./speakers.css";
import React from "react";
import grid from "./dots.png";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Speakers from "./speakers.js";

const SpeakersWrapper = styled.div`
  background-color: #072227;
  padding-bottom: 10vh;
`;

const CarouselDiv = styled.div`
  margin: 0 5rem;
  width: 90%;
  & .swiper-button-next {
    color: #08bd04;
  }
  & .swiper-button-prev {
    color: #08bd04;
  }
  .swiper-pagination-bullet-active {
    background: #08bd04 !important;
  }
  @media (max-width: 1400px) {
    margin: 0 4rem;
  }
  @media (max-width: 1000px) {
    margin: 0 2.5rem;
  }
  @media (max-width: 750px) {
    margin: 0 2rem;
  }
  @media (max-width: 450px) {
    margin: 0 1rem;
  }
`;

const SpeakerCard = styled.div`
  // height: 40vh;
  background-color: black;
  font-size: 1.2rem;
  color: white;
  border-radius: 2rem;
  cursor: grab;
  "&:active{
    cursor: grabbing;
  }
`;

const SpeakerImg = styled.img`
  display: block;
  height: 17vw;
  @media (max-width: 1300px) {
    height: 25vw;
  }
  @media (max-width: 750px) {
    height: 45vw;
  }
  @media (max-width: 450px) {
    height: 50vw;
  }
`;

const SpeakerBody = styled.div`
  padding: 2rem;
`;

const SpeakerName = styled.h5`
  font-size: 2rem;
  padding-bottom: 2vh;
`;

const SpeakerDes = styled.p`
  font-size: 1.2rem;
`;

const PictureDiv = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridImage = styled.img`
  position: absolute;
  top: 50px;
  left: 32px;
  height: 30px;
  @media (max-width: 1700px) {
    left: 35px;
  }
  @media (max-width: 1550px) {
    left: 27px;
  }
  @media (max-width: 1300px) {
    left: 51px;
  }
  @media (max-width: 1100px) {
    left: 40px;
  }
  @media (max-width: 900px) {
    left: 30px;
  }
  @media (max-width: 750px) {
    top: 60px;
    left: 94px;
  }
  @media (max-width: 650px) {
    top: 57px;
    left: 75px;
  }
  @media (max-width: 450px) {
    top: 57px;
    left: 34px;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1rem 0 1rem;
  margin-bottom: 2.5rem;
`;

function SwiperCarousel() {
  return (
    <SpeakersWrapper id="judges">
      <TitleDiv>
        <h1 className="main-heading" data-content="Judges">
          Judges
        </h1>
      </TitleDiv>
      <CarouselDiv>
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            760: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            980: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1700: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {Speakers.map((speaker) => (
            <SwiperSlide key={speaker.key}>
              <SpeakerCard>
                <PictureDiv>
                  <GridImage src={grid} alt="" />
                  <SpeakerImg src={speaker.img} alt={"Speaker image"} />
                </PictureDiv>
                <SpeakerBody>
                  <SpeakerName>{speaker.name}</SpeakerName>
                  <SpeakerDes>{speaker.des}</SpeakerDes>
                </SpeakerBody>
              </SpeakerCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselDiv>
    </SpeakersWrapper>
  );
}

export default SwiperCarousel;
