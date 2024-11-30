import Player from 'lottie-react';
import animationData from '../../assets/lotties/perfil.json';

const LottieSkill = () => {
  return (
    <div className='perfil'>
      <Player 
        animationData={animationData} 
        loop 
        autoplay 
      />
    </div>
  );
};

export default LottieSkill;
