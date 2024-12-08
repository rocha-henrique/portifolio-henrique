import  { useState, useEffect } from "react";
import instagram from '../../assets/Hero/instagram.png'
import linkedin from '../../assets/Hero/linkedin.png'
import GitHub from '../../assets/Hero/gitHub.png'
import gmail from '../../assets/Hero/gmail.png'
import LottiePerfil from '../lotties/LottiePerfil';
import './NavBar.css'

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

  return (
    <div>
            <nav
        className={`navbar-esquerda ${
          showNavbar ? "show-navbar" : "hide-navbar"
        }`}
      >
          <a href="#hero">< LottiePerfil /></a>

        <a href='https://github.com/rocha-henrique' className='button-github' target="_blank"> <img className='img-github' src={GitHub} alt="" /></a>

        <div className='container-redes-sociais'>
          <a href='https://linkedin.com/in/dev-henrique-rocha/' target='_blank' className='button-redes' ><img className='img-redes' src={linkedin} alt="" /></a>
          <a href='https://rochahenrique.1023@gmail.com' target='_blank' className='button-redes' ><img className='img-redes' src={gmail} alt="" /></a>
          <a href='https://instagram.com/henrique.rocha_/' target="_blank" className='button-redes' ><img className='img-redes' src={instagram} alt="" /></a>
        </div>
  
        <div className='container-links'>
          <span className='container'>
            <button className='button'><a style={{color: 'white'}} href="#segundaDobra">Skills</a></button>
          </span>
          <span className='container'>
            <button className='button'><a style={{color: 'white'}} href="">Sobre</a></button>
          </span>
          <span className='container'>
            <button className='button'>Portifólio</button>
          </span>
          <span className='container'>
            <button className='button'>Contato</button>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;


