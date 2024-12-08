import { useState, useEffect } from "react";
import ParticlesBackground from "../ParticlesBackground";
import './Hero.css';

const Hero = () => {
  const frases = [
    "Imagine a solução perfeita para o seu problema...",
    <> Acredite no poder <br/> de transformar ideias <br/> em realidade... </>,
    "Sonhe alto com o projeto dos seus sonhos...",
    <span className="frase-eu-realizo">E EU O REALIZO</span>,
  ];

  const [fraseAtual, setFraseAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFraseAtual((prev) => (prev + 1) % frases.length);
    }, 5000); // Troca a cada 5 segundos
    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, [frases.length]);

  return (
    <div className="container-hero">
      <ParticlesBackground />
      <div className="container-title">
        <h2 className="frase-hero">
          {frases[fraseAtual]}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
