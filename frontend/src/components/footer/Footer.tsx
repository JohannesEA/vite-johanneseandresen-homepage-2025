import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
          <Col md={4} className="footer__section">
            <h4>Kontakt oss</h4>
            <p>{data.phonenumber}</p>
            <p>{data.email}</p>
            <p>{data.adress}</p>
          </Col>
          <Col md={4} className="footer__section">
            <h4>Om oss</h4>
            <p>Sesongbasert</p>
            <p>Kjærlighet</p>
            <p>Blomster</p>
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
