import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing social icons
import "./footer.css";
import { ContactProps } from "../../hooks/useFetchContactinformation";

interface FooterProps {
  data: ContactProps | null;
}

const Footer = ({ data }: FooterProps) => {
  if (!data) {
    return <div>Ingen data</div>;
  }
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between text-center text-md-start">
          <Col md={3} className="footer__section">
            <h4>Kontakt oss</h4>
            <p>{data.phonenumber}</p>
            <p>{data.email}</p>
            <p>{data.adress}</p>
          </Col>
          <Col md={3} className="footer__section">
            <h4>Om oss</h4>
            <p>Sesongbasert</p>
            <p>Kjærlighet</p>
            <p>Blomster</p>
          </Col>
          <Col md={3} className="footer__section ">
            <h4>Følg oss</h4>
            <div className="footer__icons">
              <a
                href={"https://www.facebook.com/skeivestilker"}
                target="_blank"
                rel="noreferrer"
                className="footer__icon"
              >
                <FaFacebookF size={40} />
              </a>

              <a
                href={"https://www.instagram.com/skeivestilker/"}
                target="_blank"
                rel="noreferrer"
                className="footer__icon"
              >
                <FaInstagram size={40} />
              </a>
            </div>
          </Col>
        </Row>
        <div className="footer__copyright">
          <p>Copyright 2023</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
