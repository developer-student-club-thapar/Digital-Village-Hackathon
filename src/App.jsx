import './App.css'
import About from './Components/about/About'
import Guidelines from './Components/Guidelines/Guidelines'
import Landing from './Components/Landing/Landing'
import Speakers from './Components/Speakers/Speakers'

function App() {

  return (
    <div className="App">
      <Landing/>
      <About/>
      <Guidelines/>
      <Speakers/>
    </div> 
  )
}

export default App