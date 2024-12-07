import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import SegundaDobra from "./components/SegundaDobra/SegundaDobra";
import Particles from "react-tsparticles-js";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SegundaDobra />
      <Particles params={particlesConfig} />
    </div>
    
  )
}

export default App
