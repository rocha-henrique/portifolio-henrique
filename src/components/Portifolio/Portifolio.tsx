import './Portifolio.css';
import x from '../../assets/Portifolio/X.png'

const Portifolio = () => {
  
  return (
    <div id='Portifolio' className='container-portifolio'>
      <div className='container-title-portifolio'>
        <h1 className="title-portifolio">Portifolio</h1>
        <h3 className="subtitle-portifolio">
          Portfólio full-stack com foco em front-end e especialização em React. Apresentei soluções criativas e eficientes para interfaces de usuário, integração com APIs e desenvolvimento ágil. Explore projetos que mostram habilidades em UI/UX e inovação tecnológica.
        </h3>
      </div>
        <div className='container-projetos'>
          <div className='container-cards'>
            <div>
              <img className='card' src={x} alt="" />
            </div>
            <div>
              <img className='card' src={x} alt="" />
            </div>
            <div>
              <img className='card' src={x} alt="" />
            </div>
          </div>

          <div className='container-cards'>
            <div>
              <img className='card' src={x} alt="" />
            </div>
            <div>
              <img className='card' src={x} alt="" />
            </div>
            <div>
              <img className='card' src={x} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
};

export default Portifolio;
