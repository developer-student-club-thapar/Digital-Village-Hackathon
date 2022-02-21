import React, { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import left from "../icons/left.svg";
// import right from "../icons/right.svg";
// import Slide from "./Slide";
// import "swiper/css";
import "./Speakers1.css"

// import "swiper/css/navigation";

// export type DataObj = {
//     id: number,
//     name: string,
//     company: string,
//     post: string,
//     nationality: string,
//     expertise: string,
// }

// const data: DataObj[] = [{
//     id:1,
//     name:"Ananya Kapoor",
//     company:" Enterprise Products Partners L.P.",
//     post:"Head of Operations",
//     nationality: 'IN',
//     expertise:"Motivation",
//     // image:"https://randomuser.me/api/portraits/",
// },
// {
//     id:2,
//     name:"Vivaan Das",
//     company:"ConocoPhillips",
//     post:"Member of Technical Staff ",
//     nationality: 'IN',
//     expertise:"Design",
// },
// {
//     id:3,
//     name:"Advik Kapoor",
//     company:"The Walt Disney Company",
//     post:"Head of Strategy",
//     nationality: 'IN',
//     expertise:"Design",
// },
// {
//     id:4,
//     name:"Aarav Mannan",
//     company:"Ford Motor",
//     post:"Engineering Manager",
//     nationality: 'IN',
//     expertise:"Design",
// },
// {
//     id:5,
//     name:"Pari Bhasin",
//     company:"Home Depot",
//     nationality: 'IN',
//     post:"Full Stack Engineer",
//     expertise:"Design",
// }]

// const Typography: React.CSSProperties = {
//     color:'black',
//     fontFamily: "'Circular Std', sans-serif",
//     letterSpacing: '0.05rem',
//     margin:'0',
// }

// const heading: React.CSSProperties = {
//     ...Typography,
//     margin: '1rem 0',
//     fontSize:'1.5rem',

// }

// const arrowButtons: React.CSSProperties = {
//     background: 'transparent',
//     border: '1px solid #636363',
//     borderRadius: '50%',
//     height: '30px',
//     width: '30px',
//     fontWeight: 'bold',
//     lineHeight: '1rem',

// }

// const buttonStyle: React.CSSProperties = {
//     background: 'transparent',
//     border: '1px solid #636363',
//     borderRadius: '0.5rem',
//     height: '33px',
//     width: '100px',
//     transform: 'translateY(-3px)',
//     // letterSpacing: '0.025rem',
// }

export default function Slider() {
  // ????
  const prevRef = useRef < HTMLButtonElement > null;
  const nextRef = useRef < HTMLButtonElement > null;
  return (
    <div style={{ margin: "2rem", backgroundColor: "#A7A7A7" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4 style={{ ...heading }}>Discover the world's top mentors</h4>
        </div>
        <div style={{ padding: "0 2rem" }}>
          <button style={{ ...buttonStyle, ...Typography, margin: "1rem" }}>
            Explore all
          </button>
          <button
            ref={prevRef}
            style={{ ...arrowButtons, margin: "1rem 0.5rem" }}
          >
            {" "}
            <img src={left} alt="" height={15} width={15} />{" "}
          </button>
          <button
            ref={nextRef}
            style={{ ...arrowButtons, margin: "1rem 0.5rem" }}
          >
            {" "}
            <img src={right} alt="" height={15} width={15} />{" "}
          </button>
        </div>
      </div>
      <Swiper
        onInit={(swiper) => {
          //@ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          //@ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={150}
        slidesPerView={3}
        modules={[Navigation]}
        // define breakpoints  according to the screen size
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        scrollbar={{ draggable: true }}
        // Doesnt work idfk
        speed={500}
        slidesPerGroup={2}
        loop
      >
        <SwiperSlide>
          <div className="card">
            <img
              src={"https://picsum.photos/100/50"}
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
              src={"https://picsum.photos/100/50"}
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
              src={"https://picsum.photos/100/50"}
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
              src={"https://picsum.photos/100/50"}
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
              src={"https://picsum.photos/100/50"}
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
              src={"https://picsum.photos/100/50"}
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
