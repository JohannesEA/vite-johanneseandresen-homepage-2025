import Carousel from "react-bootstrap/Carousel";
import useCarouselleData from "../../hooks/useCarouselledata";
import "./carouselle.css";

const Carouselle = () => {
  const { carouselleSlides, isCarouselleLoading } = useCarouselleData();

  if (isCarouselleLoading) {
    return <div className="carouselle__loading">Loading...</div>;
  }

  return (
    <Carousel className="carouselle">
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
