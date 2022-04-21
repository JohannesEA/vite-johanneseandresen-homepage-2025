import { Wrapper } from "./ServiceBox.styles";

interface IServiceBox {
  title: string;
  icon: string;
  desc: string;
  array?: string[];
}

const ServiceBox = ({ title, icon, desc, array }: IServiceBox) => {
  return (
    <Wrapper>
      <img className="service-box__img" src={icon} alt={title} />
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="service-box__points-container">
        {array?.map((p) => (
          <ul key={p} className="service-box__points">
            <li>
              <p>{p}</p>
            </li>
          </ul>
        ))}
      </div>
    </Wrapper>
  );
};

export default ServiceBox;
