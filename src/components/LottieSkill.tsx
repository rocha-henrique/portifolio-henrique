import Player from 'lottie-react';
import animationData from '../assets/lotties/skills.json';
import '../App.css'

const LottieSkill = () => {
  return (
    <div className='linguagem'>
      <Player 
        animationData={animationData} 
        loop 
        autoplay 
      />
    </div>
  );
};

export default LottieSkill;
