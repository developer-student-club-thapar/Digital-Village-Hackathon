import About from "./Components/about/About";
import Guidelines from "./Components/Guidelines/Guidelines.jsx";
import Landing from "./Components/Landing/Landing";
// import Speakers from "./Components/Speakers/Speakers";
import LogoSection from "./Components/LogoNav/LogoSection";
import SwiperCarousel from "./Components/Speakers/SwiperCarousel";
import ProblemStatements from "./Components/ProblemStatements/ProblemStatements";
import SponsorsWrapperMain from "./Components/Sponsors/SponsorsWrapperMain";
import Footer from "./Components/Footer/Footer";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <LogoSection />
      <Guidelines />
      <ProblemStatements />
      <SponsorsWrapperMain />
      {/* <Speakers /> */}
      <SwiperCarousel />
      <Footer />
    </div>
  );
}

export default App;
