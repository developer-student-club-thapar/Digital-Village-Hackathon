import About from "./Components/about/About";
import Guidelines from "./Components/Guidelines/Guidelines.jsx";
import Landing from "./Components/Landing/Landing";
import Speakers from "./Components/Speakers/Speakers";
import ProblemStatements from "./Components/ProblemStatements/ProblemStatements";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Guidelines />
      <Speakers />
      <ProblemStatements />
    </div>
  );
}

export default App;
