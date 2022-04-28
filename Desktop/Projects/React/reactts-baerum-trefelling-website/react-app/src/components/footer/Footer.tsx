import { Wrapper } from "./Footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <img
        className="footer__img"
        src="/assets/logos/Bærum Trefelling.jpg"
        alt="footer__img"
      />
      <div className="footer__inner-container">
        Copyright Baerumtreefelling.no 2022
      </div>
      <div className="footer__mojo-websites-link">
        <a href="https://mojo-websites.no/">
          {" "}
          Website created by www.mojo-websites.no
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
