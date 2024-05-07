import ServiceBox from "../../../components/service-box/ServiceBox";
import { Wrapper } from "./Services.styles";

const dummyServices = [
  {
    _id: "INFORMASJON",
    title: "INFORMASJON",
    icon: "/assets/icons/icon6.png",
    link: "/tjenester/informasjon",
    short_description: "Pris fra 6500 ,-",

    long_description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, officia dignissimos? Dignissimos quaerat laboriosam quibusdam obcaecati ipsam consequatur, tempore quisquam, natus velit veritatis similique, error impedit atque aperiam architecto porro debitis illum animi cumque fuga nemo odio non mollitia. Architecto!",
  },
  {
    _id: "ECOMMERSE",
    title: "NETTBUTIKK",
    icon: "/assets/icons/icon5.png",
    link: "/tjenester/nettbutikk",
    short_description: "Pris fra 15000 ,-",
    long_description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, officia dignissimos? Dignissimos quaerat laboriosam quibusdam obcaecati ipsam consequatur, tempore quisquam, natus velit veritatis similique, error impedit atque aperiam architecto porro debitis illum animi cumque fuga nemo odio non mollitia. Architecto!",
  },
];

const Services = () => {
  return (
    <Wrapper id="services">
      <h2>TJENESTER</h2>
      <div className="services__box-container">
        {dummyServices.map((s) => (
          <ServiceBox
            key={s._id}
            title={s.title}
            icon={s.icon}
            link={s.link}
            description={s.short_description}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Services;
