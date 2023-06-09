import Lottie from "lottie-react";
import error from "./lottie/error.json";
import "./animation.css";

interface FlowerAnimationProps {
  text?: string;
}

const ErrorAnimation: React.FC<FlowerAnimationProps> = ({ text }) => {
  return (
    <div className="send-animation__container">
      <Lottie className="send-animation" animationData={error} />
      {text && <p>{text}</p>}
    </div>
  );
};

export default ErrorAnimation;
