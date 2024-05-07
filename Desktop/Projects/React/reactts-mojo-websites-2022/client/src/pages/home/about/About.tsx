import ProcessBox from "../../../components/process-box/ProcessBox";
import { Wrapper } from "./About.styles";
import { Link } from "react-scroll";

const PROCESSES = [
  {
    _id: 1,
    icon: "/assets/icons/icon3.png",
    title: "Enighet",
    description: "Vi blir enige med kunden om et skreddersydd design.",
    link: "",
  },
  {
    _id: 2,
    icon: "/assets/icons/icon1.png",
    title: "Design",
    description: "Vi lager en skisse av designet.",
    link: "",
  },
  {
    _id: 3,
    icon: "/assets/icons/icon2.png",
    title: "Utvikling",
    description: "Vi utvikler nettsiden med en maks tid på 4 uker.",
    link: "",
  },
];

const About = () => {
  return (
    <Wrapper id="about">
      <h2 className="about__title">OM OSS</h2>
      <p className="about__text">
        MoJo Websites består av motiverte og flinke utviklere som har et
        brennende ønske om å utvikle nettsider etter dine behov. Vi ønsker å
        lage smarte, effektive og brukervennelige løsninger som passer for alle
        type skjermer.
      </p>
      <h3 className="about__title about__title--process">
        Vår kreative prosess
      </h3>

      <div className="about__process-container">
        {PROCESSES.map((p) => (
          <ProcessBox
            key={p._id}
            title={p.title}
            icon={p.icon}
            link={p.link}
            description={p.description}
          />
        ))}
      </div>
      <Link
        className="button button--secondary hero__button"
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={300}
      >
        KONTAKT
      </Link>
    </Wrapper>
  );
};

export default About;
