import { Wrapper } from "./ServiceBox.styles";
import { Link as DomLink } from "react-router-dom";

interface IServiceBox {
  title: string;
  icon?: string;
  description?: string;
  link: string;
  onClick?: () => void;
}

const ServiceBox = ({
  title,
  icon,
  link,
  description,
  onClick,
}: IServiceBox) => {
  return (
    <Wrapper>
      <h4 className="service-box__title">{title}</h4>
      <img className="service-box__img" src={icon} alt={title} />
      <p className="service-box__text">{description}</p>
      <DomLink to={link} className="service-box__link">
        LES MER
      </DomLink>
    </Wrapper>
  );
};

export default ServiceBox;
