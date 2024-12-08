import { useState, useEffect } from "react";
import ParticlesBackground from "../ParticlesBackground";
import './Hero.css';

const Hero = () => {
  const frases = [
    "Imagine a solução perfeita para o seu problema...",
    <>Acredite no poder <br /> de transformar ideias <br /> em realidade...</>,
    "Sonhe alto com os projetos dos seus sonhos...",
    <span className="frase-eu-realizo">E EU OS REALIZAREI</span>,
  ];

  const [fraseAtual, setFraseAtual] = useState(0);
  const [mostrarSeta, setMostrarSeta] = useState(false);

  // Controla a troca das frases
  useEffect(() => {
    const intervalo = setInterval(() => {
      setFraseAtual((prev) => (prev + 1) % frases.length);
    }, 5000); // Troca a cada 5 segundos
    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, [frases.length]);

  // Exibe a seta após 20 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSeta(true);
    }, 19000); // 19 segundos
    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []);

  return (
    <div id="hero" className="container-hero">
      <ParticlesBackground />
      <div className="container-title">
        <h2 className="frase-hero">{frases[fraseAtual]}</h2>
      </div>
      {mostrarSeta && (
        <div className="container-seta">
          <span className="seta">↓</span>
        </div>
      )}
    </div>
  );
};

export default Hero;
