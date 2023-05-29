import React from "react";
import "./myButton.css";

interface IButtonProps {
  text: string;
  onPress: () => void;
}

const MyButton: React.FC<IButtonProps> = ({ text, onPress }) => {
  return (
    <button className={"button"} onClick={onPress}>
      {text}
    </button>
  );
};

export default MyButton;
