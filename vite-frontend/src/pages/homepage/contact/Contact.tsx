import InfoCard from "../../../components/card/InfoCard";
import "./Contact.scss";

const contactDetails = [
  {
    label: "Epost",
    value: "johannes.erdahl.andresen@gmail.com",
    Icon: "",
    action: `mailto:johannes.erdahl.andresen@gmail.com`,
  },
  {
    label: "Telefon",
    value: "+47 99 50 90 35",
    Icon: "",
    action: `tel:+4799509035`,
  },
  {
    label: "Lokasjon",
    value: "Oslo, Norway",
    Icon: "",
    action: `https://www.google.com/maps/search/?api=1&query=Oslo,Norway`,
  },
];

const Contact = () => {
  return (
    <section className="contact" id="kontakt">
      <h2 className="contact__title">Kontakt</h2>
      <div className="contact__container">
        {contactDetails.map((detail) => (
          <InfoCard
            key={detail.label}
            label={detail.label}
            value={detail.value}
            onClick={() => {
              window.location.href = detail.action;
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
