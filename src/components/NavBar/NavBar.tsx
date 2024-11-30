import fotoPerfil from '../../assets/Hero/FotoPerfil.png'
import instagram from '../../assets/Hero/instagram.png'
import relatorio from '../../assets/Hero/relatorio.png'
import linkedin from '../../assets/Hero/linkedin.png'
import usuario from '../../assets/Hero/usuario.png'
import galeria from '../../assets/Hero/galeria.png'
import GitHub from '../../assets/Hero/GitHub.png'
import gmail from '../../assets/Hero/gmail.png'
import email from '../../assets/Hero/email.png'
import home from '../../assets/Hero/Home.png'
import X from '../../assets/Hero/X.png'

const NavBar = () => {
  return (
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
  );
};

export default NavBar;


