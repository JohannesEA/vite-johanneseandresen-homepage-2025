import React from "react";
import "./myButton.css";

interface IButtonProps {
  text: string;
  onPress: () => void;
  color: string;
}

const MyButton: React.FC<IButtonProps> = ({ text, onPress, color }) => {
  return (
    <button className={`button ${color}`} onClick={onPress}>
      {text}
    </button>
  );
};

export default MyButton;
