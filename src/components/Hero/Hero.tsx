import { useState, useEffect } from "react";
import ParticlesBackground from "../ParticlesBackground";
import "./HeroMobile.css";
import "./Hero.css";

const Hero = () => {
  const frases = [
    <>Todo grande projeto <br/> começa com uma pequena ideia...</>,  
    "Ela cresce, ganha vida, e se transforma em uma porta mágica,",  
    "Uma porta que conecta o mundo da imaginação ao da realidade.",  
    <>Sonhe alto com os projetos <br/> que habitam em seus sonhos.</>,  
    "Você sonha o impossível,",  
    <span className="frase-eu-realizo">E juntos, o transformamos <br/> em realidade.</span>,
  ];

  const [fraseAtual, setFraseAtual] = useState(0);
  const [mostrarSeta, setMostrarSeta] = useState(false);
  const [alturaTela, setAlturaTela] = useState(window.innerHeight);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFraseAtual((prev) => (prev + 1) % frases.length);
    }, 6000);
    return () => clearInterval(intervalo);
  }, [frases.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSeta(true);
    }, 33000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ajustarAltura = () => {
      setAlturaTela(window.innerHeight);
    };

    window.addEventListener("resize", ajustarAltura);
    ajustarAltura();

    return () => {
      window.removeEventListener("resize", ajustarAltura);
    };
  }, []);

  return (
    <div id="hero" className="container-hero" style={{ height: `${alturaTela}px` }}>
      <ParticlesBackground />
      <div className="container-title">
        <h2 className="frase-hero">{frases[fraseAtual]}</h2>
      </div>
      {mostrarSeta && (
        <div className="container-seta">
          <a href="#Portifolio">
            <span className="seta">↓</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Hero;
