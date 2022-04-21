import { Wrapper } from "./Hero.styles";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <Wrapper id="hero">
      <div className="hero__text-and-buttons-container">
        <h2 className="hero__title">BÆRUM TREFELLING</h2>
        <p className="hero__text">Rask of effektiv trefelling</p>
        <p className="hero__text">Vi kommer på gratis befaring</p>
        <div className="hero__buttons">
          <Link
            className="navbar__link"
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <button className="button button--primary">TJENESTER</button>
          </Link>
          <Link
            className="navbar__link"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <button className="button button--secondary">KONTAKT OSS</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
