import ContactForm from "../../../components/contact-form/ContactForm";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import "./contact.css";
import { ContactProps } from "../../../hooks/useFetchContactinformation";

interface ContactsProps {
  data: ContactProps | null;
}

const Contacts = ({ data }: ContactsProps) => {
  if (!data) {
    return <div>Ingen data</div>;
  }
  const { email, adress, phonenumber } = data;

  return (
    <div id="contact" className="contact">
      <h1 className="medium-margin-bottom large-margin-top">Kontakt oss</h1>
      <ContactForm />
      <div className="contact-info__banners large-margin-top large-margin-bottom">
        <div className="banner__container">
          <div className="banner">
            <AiOutlineMail size={35} className="icon" />
            <a className="phone__link" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </div>
        <div className="banner__container">
          <div className="banner">
            <AiOutlinePhone size={35} className="icon" />
            <a className="phone__link" href={`tel:${phonenumber}`}>
              {phonenumber}
            </a>
          </div>
        </div>
        <div className="banner__container">
          <div className="banner">
            <BiMap size={35} className="icon" />
            <p>{adress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
