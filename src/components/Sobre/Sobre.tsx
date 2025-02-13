import './Sobre.css';
import henrique from '../../assets/Sobre/henrique.png'
import StacksCarousel from './stack';

const Sobre = () => {
  
  return (
    <div className='container-sobre' id="Sobre">  
      <div className='container-title-sobre'>
          <StacksCarousel />
      </div>

      <div className='container-perfil'>
        
        <img className='img-perfil' src={henrique} alt="" />
        <div className='container-texto-perfil'>
          <h1 className='title-name'>Henrique Rocha</h1>
          <p className='texto-perfil text'>
            💻 Desenvolvedor Front-End com experiência em JavaScript, TypeScript, React e WordPress. 
          </p>

          <p className='texto-perfil text'>
            🚀 Criei landing pages personalizadas para clientes na agência Nova Dimensão Digital, além de projetos próprios, como sites e blogs interativos.
          </p>

          <p className='texto-perfil text'>
            🎯 Focado em soluções eficientes e responsivas, combinando design moderno e alta performance.
          </p>

          <p className='texto-perfil text'>
            🔍 Busco desafios que me permitam aplicar minha criatividade e habilidades técnicas para gerar impacto.
          </p>
        </div>
      </div>
    </div>
  )
};

export default Sobre;
