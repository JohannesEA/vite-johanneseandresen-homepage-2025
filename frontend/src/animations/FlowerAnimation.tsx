import Lottie from "lottie-react";
import flowers from "./lottie/flowers.json";
import "./animation.css";

interface FlowerAnimationProps {
  text?: string;
}

const FlowerAnimation: React.FC<FlowerAnimationProps> = ({ text }) => {
  return (
    <div className="animation__container">
      <Lottie className="animation" animationData={flowers} />
      {text && <p>{text}</p>}
    </div>
  );
};

export default FlowerAnimation;
