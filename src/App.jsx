import About from "./Components/about/About";
import Guidelines from "./Components/Guidelines/Guidelines.jsx";
import Landing from "./Components/Landing/Landing";
// import Speakers from "./Components/Speakers/Speakers";
import LogoSection from "./Components/LogoNav/LogoSection";
import SwiperCarousel from "./Components/Speakers/SwiperCarousel";
import OrganisersCarousel from "./Components/Organizers/OrganisersCarousel";
import ProblemStatements from "./Components/ProblemStatements/ProblemStatements";
import SponsorsWrapperMain from "./Components/Sponsors/SponsorsWrapperMain";
import Prizes from "./Components/Prizes/Prizes";
import Footer from "./Components/Footer/Footer";
import styled from "@emotion/styled";
import "./app.css";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Element = styled.div`
  position: absolute;
  top: 1000px;
  left: 60px;
  height: 68vh;
  width: 450px;
  background-color: #282a31;
  z-index: 2;
  @media (max-width: 1400px) {
    display: none;
  }
`;

function App() {
  return (
    <div className="App">
      <Landing />
      <WrapperDiv>
        <About />
        {/* <Element /> */}
        <LogoSection />
        <Guidelines />
      </WrapperDiv>
      <ProblemStatements />
      <SponsorsWrapperMain />
      {/* <Speakers /> */}
      <OrganisersCarousel />
      <Prizes />
      <SwiperCarousel />
      <Footer />
    </div>
  );
}

export default App;
