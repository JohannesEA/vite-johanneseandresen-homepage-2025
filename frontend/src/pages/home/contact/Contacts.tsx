import ContactForm from "../../../components/contact-form/ContactForm";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import "./contact.css";

const Contacts = () => {
  return (
    <div id="contact" className="contact">
      <h1 className="medium-margin-bottom large-margin-top">Kontakt oss</h1>
      <div className="contact-info__banners large-margin-top large-margin-bottom">
        <div className="banner__container">
          <div className="banner">
            <AiOutlineMail size={25} className="icon" />
            <h4>post@skeiveblomster.no</h4>
          </div>
        </div>
        <div className="banner__container">
          <div className="banner">
            <AiOutlinePhone size={25} className="icon" />
            <h4>+47 12345678</h4>
          </div>
        </div>
        <div className="banner__container">
          <div className="banner">
            <BiMap size={25} className="icon" />
            <h4>adresse 50b</h4>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contacts;
