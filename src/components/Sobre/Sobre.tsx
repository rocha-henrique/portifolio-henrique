import './Sobre.css';
import henrique from '../../assets/Sobre/henrique.png'

const Sobre = () => {
  
  return (
    <div className='container-sobre' id="Sobre">  
      <div className='container-title-sobre'>
          <h1 className="title-sobre">Sobre</h1>
          <p className="text">
          Olá! 👋 Sou um desenvolvedor Full Stack com foco em Front-end, formado pela Trybe, onde mergulhei em mais de
          1500 horas de aprendizado intensivo em desenvolvimento web. Minha jornada na tecnologia é marcada por uma
          paixão contínua por inovação e uma busca incessante por aprimoramento profissional. Estou entusiasmado para
          aplicar minhas habilidades em projetos Front-end, criando interfaces de usuário dinâmicas e eficientes. Minha
          formação técnica e experiências práticas me prepararam para enfrentar desafios e contribuir de forma
          significativa para o desenvolvimento de soluções inovadoras.
        </p>
      </div>

      <div className='container-perfil'>
        <img className='img-perfil' src={henrique} alt="" />
        <div className='container-texto-perfil'>
          <h1>Henrique Rocha</h1>
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
