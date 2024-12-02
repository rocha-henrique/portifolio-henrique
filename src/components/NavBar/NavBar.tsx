import instagram from '../../assets/Hero/instagram.png'
import relatorio from '../../assets/Hero/relatorio.png'
import linkedin from '../../assets/Hero/linkedin.png'
import usuario from '../../assets/Hero/usuario.png'
import galeria from '../../assets/Hero/galeria.png'
import GitHub from '../../assets/Hero/GitHub.png'
import gmail from '../../assets/Hero/gmail.png'
import email from '../../assets/Hero/email.png'
import LottiePerfil from '../lotties/LottiePerfil';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar-esquerda'>
        <a href="#backGroundColor">< LottiePerfil /></a>

      <a href='https://github.com/rocha-henrique' className='button-github' target="_blank"> <img className='img-github' src={GitHub} alt="" /></a>

      <div className='container-redes-sociais'>
        <a href='https://linkedin.com/in/dev-henrique-rocha/' target='_blank' className='button-redes' ><img className='img-redes' src={linkedin} alt="" /></a>
        <a href='https://rochahenrique.1023@gmail.com' target='_blank' className='button-redes' ><img className='img-redes' src={gmail} alt="" /></a>
        <a href='https://instagram.com/henrique.rocha_/' target="_blank" className='button-redes' ><img className='img-redes' src={instagram} alt="" /></a>
      </div>

      <div className='container-links'>
        <a href="#segundaDobra" className='container-navigation'>
          <img src={usuario} alt="" />
        <p>Sobre</p>
        </a>
        <a className='container-navigation'>
          <img src={relatorio} alt="" />
        <p>Skills</p>
        </a>
        <a className='container-navigation'>
          <img src={galeria} alt="" />
        <p>Portifólio</p>
        </a>
        <a className='container-navigation'>
          <img src={email} alt="" />
        <p>Contato</p>
        </a>
      </div>
    </div>
  );
};

export default NavBar;


