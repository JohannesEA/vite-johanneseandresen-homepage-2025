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
    </Wrapper>
  );
};

export default Footer;
