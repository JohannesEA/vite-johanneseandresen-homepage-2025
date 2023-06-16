import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import MyButton from "../../../components/button/MuButton";
import { useNavigate } from "react-router-dom";
import { AboutProps } from "../../../hooks/useAboutData";

interface IAbout {
  data: AboutProps | null;
}

const About: React.FC<IAbout> = ({ data }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/om`;
    navigate(path);
  };

  if (!data) {
    return <div>Ingen data</div>;
  }

  const { title, slogan, description } = data;

  return (
    <Container id="about" className="about">
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
        <MyButton text={"Les mer"} onPress={routeChange} color="black" />
      </Row>
    </Container>
  );
};

export default About;
