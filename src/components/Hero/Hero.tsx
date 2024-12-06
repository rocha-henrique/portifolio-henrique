import backGroundColor from '../../assets/Hero/BackGroundColor.png'
import LottieHero from '../lotties/LottieHero'
import './Hero.css'

const Hero = () => {
  return (
    <div className='container-hero'>
      <img id='backGroundColor' className='img-hero' src={backGroundColor} alt="BackGround" />
      <div className='container-title'>
        <h1 className='title-hero'>Henrique Rocha</h1>
        <br />
        <h1>Desenvolvedor Full-Stack | Soluções Criativas e Eficientes</h1> <br />
        <p>"Sou apaixonado por tecnologia e adoro transformar códigos em experiências incríveis. Seja um site pessoal ou um sistema robusto, estou aqui para fazer a mágica acontecer!"</p>
      </div>
      < LottieHero />
    </div>
  );
};

export default Hero;
