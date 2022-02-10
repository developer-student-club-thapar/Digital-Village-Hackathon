import About from "./Components/about/About";
import Guidelines from "./Components/Guidelines/Guidelines.jsx";
import Landing from "./Components/Landing/Landing";
import Speakers from "./Components/Speakers/Speakers";
import ProblemStatements from "./Components/ProblemStatements/ProblemStatements";
import Sponsor from "./components/sponsor/sponsor";
import { FooterContainer } from "./components/Footer/Footer";
import './App.css'

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Guidelines />
      <Speakers />
      <Sponsor />
      <ProblemStatements />
      <FooterContainer />
    </div>
  );
}

export default App;
