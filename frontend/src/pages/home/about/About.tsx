import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import useAboutData from "../../../hooks/useAboutData";
import "./about.css";

const About = () => {
  const { data, error } = useAboutData();

  if (error) return <p>Det har skjedd en feil: {error.message}</p>;
  if (!data) return <p>No Data</p>;

  const { title, slogan, description } = data;

  return (
    <Container className="about">
      <Row className="about__row">
        <h1>{title}</h1>
      </Row>
      <Row className="about__row ">
        <Col className="about__slogan">
          <div className="about__slogan-text">
            <h2>{slogan}</h2>
          </div>
        </Col>
      </Row>
      <Row className="about__row">
        <Col className="about__description">
          <p>{description}</p>
        </Col>
      </Row>
      <Row className="about__row about__row--cta">
        <Button className="about__button" variant="primary">
          Kontakt Oss
        </Button>
      </Row>
    </Container>
  );
};

export default About;
