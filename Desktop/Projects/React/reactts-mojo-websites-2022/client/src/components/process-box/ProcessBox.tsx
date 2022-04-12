import { Wrapper } from "./ProcessBox.styles";

interface IProcessBox {
  title: string;
  icon?: string;
  description?: string;
  link: string;
  onClick?: () => void;
}

const ProcessBox = ({
  title,
  icon,
  description,
  link,
  onClick,
}: IProcessBox) => {
  return (
    <Wrapper>
      <img className="process-box__img" src={icon} alt={title} />
      <h4 className="process-box__text">{title}</h4>
      <p className="process-box__text">{description}</p>
      {/* <DomLink to={link} className="process-box__link">
        LES MER
      </DomLink> */}
    </Wrapper>
  );
};

export default ProcessBox;
