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
import Loader from "./Components/Loader/Loader";
import styled from "@emotion/styled";
import Sidenav from "./Components/navbar/SideNav";

import "./app.css";
import Timeline from "./Components/Timeline/Timeline";
import BackToTop from "./Components/BackToTop/BackToTop";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <div className="App">
      <Loader />
      <Sidenav />
      <BackToTop />
      <Landing />
      <WrapperDiv>
        <About />
        {/* <Element /> */}
        <LogoSection />
        <Guidelines />
        <Timeline />
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
