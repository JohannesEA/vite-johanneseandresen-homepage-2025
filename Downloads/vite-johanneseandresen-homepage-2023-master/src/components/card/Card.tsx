import React from "react";
import "./Card.scss";
import { SwiperItem } from "../../types";

interface CardProps {
  item: SwiperItem;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="swiper-item">
      <h3 className="swiper-item__title">{item.title}</h3>
      <img className="swiper-item__img" src={item.img} alt={item.title} />
      <p className="swiper-item__description">{item.description}</p>
      {item.year && <p className="swiper-item__description">{item.year}</p>}
    </div>
  );
};

export default Card;
