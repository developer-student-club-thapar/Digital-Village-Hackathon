import About from "./Components/about/About";
import Guidelines from "./Components/Guidelines/Guidelines.jsx";
import Landing from "./Components/Landing/Landing";
import Speakers from "./Components/Speakers/Speakers";
import ProblemStatements from "./Components/ProblemStatements/ProblemStatements";
import SponsorsWrapperMain from "./Components/Sponsors/SponsorsWrapperMain";
import Footer from "./Components/Footer/Footer";
import "./app.css";
import Speakers1 from "./Components/Speakers/Speakers1";
import Speakers2 from './Components/Speakers/Speakers2'
function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Guidelines />
      <ProblemStatements />
      <SponsorsWrapperMain />
      <Speakers2/>
      <Footer />
    </div>
  );
}

export default App;
