import About from "./Components/about/About";
import Guidelines from "./Components/Guidelines/Guidelines.jsx";
import Landing from "./Components/Landing/Landing";
import Speakers from "./Components/Speakers/Speakers";
import ProblemStatements from "./Components/ProblemStatements/ProblemStatements";
import Sponsor from "./Components/Sponsor/Sponsor";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Guidelines />
      <Speakers />
      <Sponsor />
      <ProblemStatements />
      <Footer />
    </div>
  );
}

export default App;
