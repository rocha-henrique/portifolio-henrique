import backGroundColor from '../../assets/Hero/BackGroundColor.png'
import LottieHero from '../lotties/LottieHero'
import './Hero.css'

const Hero = () => {
  return (
    <div className='container-hero'>
      <img className='img-hero' src={backGroundColor} alt="BackGround" />
      <div className='container-title'>
        <h1 className='title-hero'>Desenvolvedor Full-stack</h1>
        <br />
        <h1 className='title-hero'>Henrique Rocha</h1>
      </div>
      < LottieHero />
    </div>
  );
};

export default Hero;
