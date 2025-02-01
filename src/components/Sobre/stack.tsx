import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import reactLogo from "../../assets/Sobre/react.png";
import typescriptLogo from "../../assets/Sobre/typescript.png";
import mysqlLogo from "../../assets/Sobre/mysql.png";
import wordpressLogo from "../../assets/Sobre/wordpress.png";
import nodeLogo from "../../assets/Sobre/node.png";
import jsLogo from "../../assets/Sobre/js.png";
import cssLogo from "../../assets/Sobre/css.png";
import htmlLogo from "../../assets/Sobre/html.png";
import dockerLogo from "../../assets/Sobre/docker.png";
import npmLogo from "../../assets/Sobre/npm.png";
import figmaLogo from "../../assets/Sobre/figma.png";
import github from "../../assets/Sobre/github.png";
import ubuntuLogo from "../../assets/Sobre/ubuntu.png";

// Array original de imagens
const stacks = [
  
  mysqlLogo,
  typescriptLogo,
  reactLogo,
  wordpressLogo,
  nodeLogo,
  jsLogo,
  cssLogo,
  htmlLogo,
  dockerLogo,
  npmLogo,
  figmaLogo,
  github,
  ubuntuLogo,
];

// Clona o array 1000 vezes para criar um carrossel infinito
const clonesCount = 1000;
const clonedStacks = Array.from({ length: clonesCount }, () => stacks).flat();

const StacksCarousel = () => {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  // Função para iniciar a animação em câmera lenta
  const startAnimation = () => {
    if (!trackRef.current) return;
    const totalWidth = trackRef.current.scrollWidth;

    animationRef.current = animate(x, -totalWidth, {
      duration: 15000, // Duração da animação aumentada para ser mais lenta
      ease: "linear",
      repeat: Infinity,
    });
  };

  useEffect(() => {
    startAnimation();
    return () => {
      animationRef.current?.stop();
    };
  }, []);

  // Pausa a animação quando o mouse entra na área do carrossel
  const handleMouseEnter = () => {
    animationRef.current?.stop();
  };

  // Retoma a animação quando o mouse sai da área do carrossel
  const handleMouseLeave = () => {
    startAnimation();
  };

  return (
    <div className="carousel-container">
      <motion.div
        ref={trackRef}
        className="carousel-track"
        style={{ x }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {clonedStacks.map((image, index) => (
          <div key={index} className="carousel-item">
            <img className="img-carousel" src={image} alt={`Stack ${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StacksCarousel;
