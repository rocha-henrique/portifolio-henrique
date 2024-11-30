import { useState, useEffect } from "react";
import LottieSkill from "../LottieSkill";
import './SegundaDobra.css'

const SegundaDobra = () => {

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
      <LottieSkill />
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
  );
};

export default SegundaDobra;
