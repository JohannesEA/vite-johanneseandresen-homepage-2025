import React from "react";
import "./InfoCard.scss";

interface InfoCardProps {
  label: string;
  value: string;
  onClick: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ label, value, onClick }) => {
  return (
    <div className="item-card" onClick={onClick}>
      <span className="item-card__label">{label}</span>
      <span className="item-card__value">{value}</span>
    </div>
  );
};

export default InfoCard;
