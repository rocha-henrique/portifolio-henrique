import ImageCard from "./ImageCard";
import "./PortifolioMobile.css";
import "./Portifolio.css";

// import desenhosDaGi from "../../assets/Portifolio/desenhosDaGi.jpg";
import palestraDoGab from "../../assets/Portifolio/palestraDoGab.jpg"
import as48LeisDaOratoria from "../../assets/Portifolio/as48LeisDaOratoria.jpg"
import rafaelUltramar from "../../assets/Portifolio/rafaelUltramar.jpg"
import logoGame from "../../assets/Portifolio/LogoGame.png"
import draMaira from "../../assets/Portifolio/draMaira.jpg"
// import deliaDay from "../../assets/Portifolio/deliaDay.png"
import pbArts from "../../assets/Portifolio/pbArts.png"
// import petzeres from "../../assets/Portifolio/petzeres.png"
import formulaDaOratoria from "../../assets/Portifolio/formulaDaOratoria.png"
import resetDoJejum from "../../assets/Portifolio/resetDoJejum.png"
import resenhaCompany from "../../assets/Portifolio/resenhaCompany.png"
import canalDaModa from "../../assets/Portifolio/canalDaModa.png"
import leadd from "../../assets/Portifolio/leadd.png"

const Portifolio = () => {
  return (
    <div id="Portifolio" className="container-portifolio">
      <div className="container-title-portifolio">
        <h1 className="title-portifolio">PROJETOS</h1>
        <p className="text">
          Portifólio full-stack com foco em front-end e especialização em React.
          Apresentei soluções criativas e eficientes para interfaces de
          usuário, integração com APIs e desenvolvimento ágil. Explore projetos
          que mostram habilidades em UI/UX e inovação tecnológica.
        </p>

        <p className="text">Landing pages desenvolvidas em parceria com a agência de marketing <a target="blank_" href="https://www.novadimensaohub.com.br/">Nova Dimensão Hub</a>, destacando projetos criativos e personalizados para diversos clientes.</p>
      </div>

      <div className="container-projetos">
        <div className="container-cards">
          <label htmlFor=""> <p className="title-sites">E-commerce</p>
            <ImageCard
              className="pb"
              imageSrc={pbArts}
              link="https://www.pbartsshop.com.br/"
              altText="galeria de arte PB Arts"
              />
          </label>
          
          <label htmlFor=""> <p className="title-sites">E-commerce</p>
            <ImageCard
              className="canalDaModa"
              imageSrc={canalDaModa}
              link="https://www.canaldamodaoficial.com.br/"
              altText="loja de roupas canalDaModa"
              />
          </label>
        </div>

        <div className="container-cards">
          <label htmlFor=""> <p className="title-sites">Site</p>
              <ImageCard
                imageSrc={resenhaCompany}
                link="https://resenhacompany.com.br"
                altText="Resenha Company"
              />
          </label>

          <label htmlFor=""> <p className="title-sites">Site</p>
              <ImageCard
                imageSrc={leadd}
                link="https://leadd.com.br"
                altText="leadd"
              />
          </label>

          <label htmlFor=""> <p className="title-sites">Landing Page</p>
            <ImageCard
              imageSrc={rafaelUltramar}
              link="https://rafaelultramar.com.br/dr-rafael-ultramar-lp/"
              altText="Rafael Ultramar"
            />
          </label>
        </div>

        <div className="container-cards">
          <label htmlFor=""> <p className="title-sites">Landing Page</p>
            <ImageCard
              imageSrc={palestraDoGab}
              link="https://resenhagroup.com.br/palestra-do-gab/"
              altText="Palestra do Gab"
              />
          </label>

          <label htmlFor=""> <p className="title-sites">Landing Page</p>
            <ImageCard
              imageSrc={resetDoJejum}
              link="https://dra.mairasoliani.com.br/reset-do-jejum/"
              altText="Reset do Jejum"
            />
          </label>
          
          <label htmlFor=""> <p className="title-sites">Landing Page</p>
            <ImageCard
              imageSrc={draMaira}
              link="https://dra.mairasoliani.com.br/combo-7-passos-a-ciencia-do-desconforto/"
              altText="Dra Maira"
            />
          </label>
        </div>

        <div className="container-cards">
          <label htmlFor=""> <p className="title-sites">Landing Page</p>
            <ImageCard
              imageSrc={as48LeisDaOratoria}
              link="https://elprofessordaoratoria.com.br/as-48-leis-da-oratoria"
              altText="As 48 Leis da Oratoria"
            />
          </label>

          <label htmlFor=""> <p className="title-sites">Landing Page</p>
            <ImageCard
              imageSrc={formulaDaOratoria}
              link="https://elprofessordaoratoria.com.br/formula-da-oratoria-d-inativa"
              altText="Formula da Oratoria"
              />
          </label>

          <label htmlFor=""> <p className="title-sites">Jogo Mobile</p>
            <a href="https://jackpoot.itch.io/helix-jack-game" target="blank_">
              <img className="card" src={logoGame} alt="Imagem do jogo mobile" />
            </a>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
