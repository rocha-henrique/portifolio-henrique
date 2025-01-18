import './App.css'
import Hero from './components/Hero/Hero'
import HardSkills from "./components/HardSkills/HardSkills";
import Portifolio from "./components/Portifolio/Portifolio"
import Sobre from './components/Sobre/Sobre';
import Contato from './components/Contato/Contato';

function App() {
  return (
    <div>
      <Hero />
      <Portifolio />
      <HardSkills />
      <Sobre />
      <Contato />
    </div>
  )
}

export default App
