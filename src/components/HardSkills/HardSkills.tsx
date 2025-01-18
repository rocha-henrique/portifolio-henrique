import { useState, useEffect, useRef } from "react";
import NavBar from '../NavBar/NavBar';
import './HardSkills.css';

// Componente para exibir a barra de progresso para cada habilidade
const SkillProgress = ({ skill, progress }: { skill: string; progress: number }) => (
  <label htmlFor={skill}>
    {skill}
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <p className="progress-text">{progress}%</p>
    </div>
  </label>
);

const HardSkills = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

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
  }, [isVisible]);

  return (
    <div>
      <NavBar />
    <div ref={sectionRef} id="HardSkills" className="container-hard-skills">
      <div className="container-text-title">
        <h1 className="title-skills">Hard Skills</h1>
        <p className="text">
          Desenvolvedor full-stack com foco em front-end, especializado em React, HTML, CSS e JavaScript.
        </p>
      </div>

      <div className="container-skills">
        <div className="container-primeira-skills">
          <label htmlFor="">
            JavaScript
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              <p className="progress-text">{progress}%</p>
            </div>
          </label>

          <label htmlFor="">
            React.js
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              <p className="progress-text">{progress}%</p>
            </div>
          </label>

          <label htmlFor="">
            Wordpress
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              <p className="progress-text">{progress}%</p>
            </div>
          </label>

          <label htmlFor="">
            Node.js
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              <p className="progress-text">{progress}%</p>
            </div>
          </label>

          <label htmlFor="">
            MySQL
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              <p className="progress-text">{progress}%</p>
            </div>
          </label>
        </div>

        <div className="container-segunda-skill">
          {["TypeScript", "Figma", "Docker", "HTML", "CSS"].map((skill) => (
            <SkillProgress key={skill} skill={skill} progress={progress} />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default HardSkills;
