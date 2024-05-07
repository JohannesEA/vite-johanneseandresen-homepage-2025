import { Link } from "react-scroll";
import {
  AiOutlineCopyright,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Wrapper } from "./Footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer__inner-container">
        <div className="footer__inner-container--top">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
            <h4 className="footer__logo footer__item">MOJO</h4>
          </Link>
          <p className="footer__text footer__item">
            Vi lager perfekte nettsider etter dine behov.
          </p>
          <div className="footer__item">
            <AiOutlineInstagram
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/mojowebsites1/")
              }
              color="var(--color--light)"
              fontSize={30}
              cursor="pointer"
            />
            <AiOutlineLinkedin
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/johannes-erdahl-andresen-2aa117205/")
              }
              color="var(--color--light)"
              fontSize={30}
              cursor="pointer"
            />
          </div>
        </div>

        <div className="footer__inner-container--bottom footer__text">
          mojo-websites.no <AiOutlineCopyright fontSize={20} /> 2022
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
