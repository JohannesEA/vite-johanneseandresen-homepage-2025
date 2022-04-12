import { Wrapper } from "./Hero.styles";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <Wrapper id="hero">
      <div className="hero__container"></div>

      <div className="hero__text-container">
        <h2 className="hero__logo--title hero__logo--title--welcome">
          Velkommen til
        </h2>
        <h1 className="hero__logo--title">MOJO WEBSITES</h1>
        <div className="hero__buttons">
          <Link
            className="button button--primary hero__button"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            OM OSS
          </Link>

          <Link
            className="button button--secondary hero__button"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            BESTILL NETTSIDE
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
