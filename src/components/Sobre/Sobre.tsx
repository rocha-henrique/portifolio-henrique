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
          <p className='texto-perfil text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className='texto-perfil text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  )
};

export default Sobre;
