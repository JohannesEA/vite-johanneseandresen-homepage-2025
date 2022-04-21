import { Wrapper } from "./ContactBox.styles";

interface IContactBox {
  title: string;
  icon: string;
  desc: string;
  array?: string[];
}

const ContactBox = ({ title, icon, desc, array }: IContactBox) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <img className="contact-box__img" src={icon} alt={title} />
      <p>{desc}</p>
    </Wrapper>
  );
};

export default ContactBox;
