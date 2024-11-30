import backGround from '../../assets/Hero/BackGround.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='container-hero'>
      <img className='img-hero' src={backGround} alt="BackGround" />
    </div>
  );
};

export default Hero;
