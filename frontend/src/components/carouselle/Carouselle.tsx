import Carousel from "react-bootstrap/Carousel";
import { CarouselleProps } from "../../hooks/useCarouselledata";
import "./carouselle.css";

interface ICarouselle {
  carouselleSlides: CarouselleProps[];
}

const Carouselle: React.FC<ICarouselle> = ({ carouselleSlides }) => {
  return (
    <Carousel
      id="hero"
      className="carouselle"
      prevIcon={carouselleSlides.length > 1}
      nextIcon={carouselleSlides.length > 1}
    >
      {carouselleSlides.map((slide, index) => (
        <Carousel.Item key={index} className="carouselle__item">
          <img
            className="carouselle__image"
            src={slide.image}
            alt={slide.title}
          />
          <Carousel.Caption className="carouselle__caption">
            <h3 className="carouselle__title">{slide.title}</h3>
            <p className="carouselle__description">{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carouselle;
