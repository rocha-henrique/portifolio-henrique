import React, { useState } from "react";
import "./Portifolio.css";
import desenhosDaGi from "../../assets/Portifolio/desenhosDaGi.jpg";

const Portifolio = () => {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div id="Portifolio" className="container-portifolio">
      <div className="container-title-portifolio">
        <h1 className="title-portifolio">Portifolio</h1>
        <p className="text">
          Portfólio full-stack com foco em front-end e especialização em React.
          Apresentei soluções criativas e eficientes para interfaces de
          usuário, integração com APIs e desenvolvimento ágil. Explore projetos
          que mostram habilidades em UI/UX e inovação tecnológica.
        </p>
      </div>
      <div className="container-projetos">
        <div className="container-cards">
          <div
            className="card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="https://rocha-henrique.github.io/desenhosDaGi/" target="_blank" rel="noreferrer">
              <img
                className={`scrolling-image ${hovering ? "scroll" : ""}`}
                src={desenhosDaGi}
                alt="Desenhos da Gi"
              />
            </a>
          </div>
          <div className="card">
            <p className="frase-em-breve">EM BREVE</p>
          </div>
          <div className="card">
            <p className="frase-em-breve">EM BREVE</p>
          </div>
        </div>

        <div className="container-cards">
          <div className="card">
            <p className="frase-em-breve">EM BREVE</p>
          </div>
          <div className="card">
            <p className="frase-em-breve">EM BREVE</p>
          </div>
          <div className="card">
            <p className="frase-em-breve">EM BREVE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
