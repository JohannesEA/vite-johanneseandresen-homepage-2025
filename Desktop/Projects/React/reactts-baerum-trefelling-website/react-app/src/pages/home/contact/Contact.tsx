import ContactBox from "../../../components/contact-box/ContactBox";
import { Wrapper } from "./Contact.styles";

const CONTACT = [
  {
    _id: 1,
    title: "Epost",
    desc: "post@baerumtrefelling.no",
    icon: "/assets/icons/gmail.png",
  },
  {
    _id: 2,
    title: "Skui kontakt",
    desc: "Atle Korsmo",
    icon: "/assets/icons/user.png",
  },
  {
    _id: 3,
    title: "Telefon",
    desc: "+47 90 66 32 54",
    icon: "/assets/icons/phone.png",
  },
];

const Contact = () => {
  return (
    <Wrapper id="contact">
      <h3>KONTAKT OSS</h3>
      <p className="contact__text">
        Ønsker du å felle noen trær? Kontakt oss da vell!
      </p>
      <div className="contact__inner-container">
        {CONTACT.map((contact) => (
          <ContactBox
            title={contact.title}
            icon={contact.icon}
            desc={contact.desc}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Contact;
