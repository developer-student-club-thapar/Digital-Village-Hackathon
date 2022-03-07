import { useEffect, useRef } from "react";
import gdc from "./assets/gdc.png";
import line from "./assets/loader.svg";
import { gsap } from "gsap";
import styled from "@emotion/styled";

const LoaderWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  z-index: 9999;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const LoaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // transform: translateY(-50%) translateX(-50%);
`;

const Logo = styled.img`
  margin: 1rem;
`;
const Line = styled.img``;

function Loader() {
  const wrapper = useRef(null);
  const loaderRef = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(loaderRef.current, { width: 0, marginLeft: "100%" })
      .to(loaderRef.current, {
        // transformOrigin: "left",
        marginLeft: "0%",
        width: "275px",
        // transform: "translateX(100%)",
        duration: 2,
        ease: "power1.inOut",
      })
      .to(
        wrapper.current,
        {
          right: "100%",
          ease: "power1.inOut",
        },
        "+=0.5"
      );
  }, []);
  return (
    <LoaderWrapper ref={wrapper}>
      <LoaderDiv>
        <Logo src={gdc} alt="" />
        <Line src={line} ref={loaderRef} alt="loader" />
      </LoaderDiv>
    </LoaderWrapper>
  );
}

export default Loader;
