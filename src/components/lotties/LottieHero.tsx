import Player from 'lottie-react';
import lottieHero from '../../assets/lotties/Computador.json';

const LottieHero = () => {
  return (
    <div className='lottieHero'>
      <Player 
        animationData={lottieHero} 
        loop 
        autoplay 
      />
    </div>
  );
};

export default LottieHero;
