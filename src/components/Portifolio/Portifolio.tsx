import "./Portifolio.css";
import ImageCard from "./ImageCard";

import desenhosDaGi from "../../assets/Portifolio/desenhosDaGi.jpg";
import palestraDoGab from "../../assets/Portifolio/palestraDoGab.jpg"
import as48LeisDaOratoria from "../../assets/Portifolio/as48LeisDaOratoria.jpg"
import rafaelUltramar from "../../assets/Portifolio/rafaelUltramar.jpg"

const Portifolio = () => {
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
          {/* Adicione imagens reutilizando o componente */}
          <ImageCard
            imageSrc={palestraDoGab}
            link="https://resenhagroup.com.br/palestra-do-gab/"
            altText="Palestra do Gab"
          />
          <ImageCard
            imageSrc={as48LeisDaOratoria}
            link="https://elprofessordaoratoria.com.br/as-48-leis-da-oratoria"
            altText="As 48 Leis da Oratoria"
          />
          <ImageCard
            imageSrc={rafaelUltramar}
            link="https://rafaelultramar.com.br/dr-rafael-ultramar-lp/"
            altText="Rafael Ultramar"
          />
        </div>

        <div className="container-cards">
          <ImageCard
            imageSrc={desenhosDaGi}
            link="https://rocha-henrique.github.io/desenhosDaGi/"
            altText="Desenhos da Gi"
          />
          <ImageCard placeholderText="EM BREVE" />
          <ImageCard placeholderText="EM BREVE" />
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
