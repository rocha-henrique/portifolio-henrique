import { useState, useEffect } from "react";
import './App.css'
import backGround from './assets/Hero/BackGround.png'
import fotoPerfil from './assets/Hero/FotoPerfil.png'
import instagram from './assets/Hero/instagram.png'
import relatorio from './assets/Hero/relatorio.png'
import linkedin from './assets/Hero/linkedin.png'
import usuario from './assets/Hero/usuario.png'
import galeria from './assets/Hero/galeria.png'
import GitHub from './assets/Hero/GitHub.png'
import gmail from './assets/Hero/gmail.png'
import email from './assets/Hero/email.png'
import home from './assets/Hero/Home.png'
import X from './assets/Hero/X.png'

import linguagem from './assets/Segunda-dobra/linguagem.png'

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='navbar-esquerda'>
        <img className='img-perfil' src={fotoPerfil} alt="" />
        <a href='https://github.com/rocha-henrique' className='button-github' target="_blank"> <img className='img-github' src={GitHub} alt="" /></a>

        <div className='container-redes-sociais'>
          <button className='button-redes' ><img className='img-redes' src={linkedin} alt="" /></button>
          <button className='button-redes' ><img className='img-redes' src={X} alt="" /></button>
          <button className='button-redes' ><img className='img-redes' src={gmail} alt="" /></button>
          <button className='button-redes' ><img className='img-redes' src={instagram} alt="" /></button>
        </div>
        
        <div className='container-links'>
          <a className='container-navigation'>
            <button className='button-navigation' ><img className='img-navigation' src={home} alt="" /></button>
            <p>Home</p>
          </a>
          <a className='container-navigation'>
            <button className='button-navigation' ><img className='img-navigation' src={usuario} alt="" /></button>
          <p>Sobre</p>
          </a>
          <a className='container-navigation'>
            <button className='button-navigation' ><img className='img-navigation' src={relatorio} alt="" /></button>
          <p>Skills</p>
          </a>
          <a className='container-navigation'>
            <button className='button-navigation' ><img className='img-navigation' src={galeria} alt="" /></button>
          <p>Portifólio</p>
          </a>
          <a className='container-navigation'>
            <button className='button-navigation' ><img className='img-navigation' src={email} alt="" /></button>
          <p>Contato</p>
          </a>
        </div>
      </div>
      <div className='container-hero'>
          <img className='img-hero' src={backGround} alt="BackGround" />
      </div>

      {/* Segunda Dobra */ }
      <div className='container-hard-skills'>
          <div className='container-text-title'>
            <h1 className='title-skills'>
              Hard Skills
            </h1>
            <h3 className='subtitle-skills'>
              Desenvolvedor full-stack com foco em front-end, especializado em React, HTML, CSS e JavaScript.
            </h3>
          </div>

          <div className='container-img-linguagem'>
            <img className='linguagem' src={linguagem} alt="" />
          </div>

        <div className='container-skills'>
          <div className='container-primeiras-skills'>
            <label htmlFor=""> JavaScript
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <p className="progress-text">{progress}%</p>
              </div>
            </label>

            <label htmlFor=""> React.js
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <p className="progress-text">{progress}%</p>
              </div>
            </label>

            <label htmlFor="">Wordpress
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <p className="progress-text">{progress}%</p>
              </div>
            </label>

            <label htmlFor="">Node.js
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <p className="progress-text">{progress}%</p>
              </div>
            </label>

            <label htmlFor="">MySQL
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <p className="progress-text">{progress}%</p>
              </div>
            </label>
          </div>

          <div className='container-segunda-skill'>
            <label htmlFor=""> TyperScript
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <p className="progress-text">{progress}%</p>
              </div>
            </label>

            <label htmlFor=""> Figma
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <p className="progress-text">{progress}%</p>
              </div>
            </label>

            <label htmlFor=""> Docker
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <p className="progress-text">{progress}%</p>
              </div>
            </label>

            <label htmlFor=""> HTML
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <p className="progress-text">{progress}%</p>
              </div>
            </label>

            <label htmlFor=""> CSS
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <p className="progress-text">{progress}%</p>
              </div>
            </label>
          </div>
        </div>

        <div className='container-text-skills'>
          <p className='text-skills'>
            Olá! 👋 Sou um desenvolvedor Full Stack com foco em Front-end, formado pela Trybe, onde mergulhei em mais de 1500 horas de aprendizado intensivo em desenvolvimento web. Minha jornada na tecnologia é marcada por uma paixão contínua por inovação e uma busca incessante por aprimoramento profissional.
            Estou entusiasmado para aplicar minhas habilidades em projetos Front-end, criando interfaces de usuário dinâmicas e eficientes. Minha formação técnica e experiências práticas me prepararam para enfrentar desafios e contribuir de forma significativa para o desenvolvimento de soluções inovadoras.
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default App
