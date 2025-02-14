import { useState, useEffect } from "react";
import instagram from '../../assets/Hero/instagram.png';
import linkedin from '../../assets/Hero/linkedin.png';
import GitHub from '../../assets/Hero/gitHub.png';
import gmail from '../../assets/Hero/gmail.png';
import LottiePerfil from '../lotties/LottiePerfil';
import './NavBarMobile.css';
import './NavBar.css';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondFold = window.innerHeight / 1.5; // Ativa antes da segunda dobra completa
      setShowNavbar(window.scrollY > secondFold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <nav
        className={`navbar-esquerda ${
          showNavbar ? "show-navbar" : "hide-navbar"
        }`}
      >
        <a href="#hero">
          <LottiePerfil />
        </a>

        <a
          href="https://github.com/rocha-henrique"
          className="button-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img-github" src={GitHub} alt="GitHub" />
        </a>

        <div className="container-redes-sociais">
          <a
            href="https://linkedin.com/in/dev-henrique-rocha/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-redes"
          >
            <img className="img-redes" src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="mailto:rochahenrique.1023@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button-redes"
          >
            <img className="img-redes" src={gmail} alt="Gmail" />
          </a>
          <a
            href="https://instagram.com/henrique.rocha_/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-redes"
          >
            <img className="img-redes" src={instagram} alt="Instagram" />
          </a>
        </div>

        <div className="container-links">
          <span className="container">
            <button
              className="button"
              onClick={() => handleScrollToSection('Portifolio')}
            >
              PROJETOS
            </button>
          </span>
          <span className="container">
            <button
              className="button"
              onClick={() => handleScrollToSection('HardSkills')}
            >
              SKILLS
            </button>
          </span>
          <span className="container">
            <button
              className="button"
              onClick={() => handleScrollToSection('Sobre')}
            >
              SOBRE
            </button>
          </span>
          <span className="container">
            <button
              className="button"
              onClick={() => handleScrollToSection('Contato')}
            >
              CONTATO
            </button>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
