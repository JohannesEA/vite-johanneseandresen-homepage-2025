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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto a
        nihil labore laboriosam libero esse illo ipsum inventore, rem magni
        soluta illum cumque nobis veritatis. Culpa iure sint nostrum, soluta cum
        iusto ratione quia, ipsa saepe odio maiores nam laborum?
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
