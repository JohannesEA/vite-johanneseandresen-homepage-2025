import Lottie from "lottie-react";
import send from "./lottie/send-animation.json";
import "./animation.css";

interface FlowerAnimationProps {
  text?: string;
}

const SendEmailAnimations: React.FC<FlowerAnimationProps> = ({ text }) => {
  return (
    <div className="send-animation__container">
      <Lottie className="send-animation" animationData={send} />
      {text && <p>{text}</p>}
    </div>
  );
};

export default SendEmailAnimations;
