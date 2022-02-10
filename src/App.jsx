import About from "./Components/about/About";
import Guidelines from "./Components/Guidelines/Guidelines.jsx";
import Landing from "./Components/Landing/Landing";
import Speakers from "./Components/Speakers/Speakers";
import ProblemStatements from "./Components/ProblemStatements/ProblemStatements";
import Sponsors from "./Components/Sponsors/Sponsors";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Guidelines />
      <ProblemStatements />
      <Sponsors />
      <Speakers />
      <Footer />
    </div>
  );
}

export default App;
