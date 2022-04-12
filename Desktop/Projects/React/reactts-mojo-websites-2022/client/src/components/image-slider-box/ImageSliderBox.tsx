import { Wrapper } from "./ImageSliderBox.styles";

interface IImageSliderBox {
  title: string;
  icon?: string;
  description?: string;
  link: string;
  onClick?: () => void;
}

const ImageSliderBox = ({
  title,
  icon,
  link,
  description,
  onClick,
}: IImageSliderBox) => {
  return (
    <Wrapper>
      <img className="imageslider-box__img" src={icon} alt={title} />
      <p className="imageslider-box__title">{title}</p>
      <a href={link} className="imageslider-box__link">
        SE NETTSIDE
      </a>
    </Wrapper>
  );
};

export default ImageSliderBox;
