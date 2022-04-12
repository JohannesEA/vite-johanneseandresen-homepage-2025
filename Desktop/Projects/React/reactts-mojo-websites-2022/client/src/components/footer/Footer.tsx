import styled from "styled-components";
import getWindowDimensions from "../../universal/Functions";
import { Link } from "react-scroll";
import {
  AiOutlineCopyright,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
// import { Link as DomLink } from "react-router-dom";

const Footer = () => {
  const { width } = getWindowDimensions();

  return (
    <div style={{ margin: "0" }}>
      <Container>
        {width > 800 ? (
          <>
            <InnerContainer>
              <p style={{ width: "80%", color: "var(--color--light)" }}>
                Vi lager perfekte nettsider etter dine behov.
              </p>
            </InnerContainer>
            <InnerContainer>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                <Logo>MOJO</Logo>
              </Link>
            </InnerContainer>
            <InnerContainer>
              <p>
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
              </p>
            </InnerContainer>{" "}
          </>
        ) : (
          <>
            <InnerContainer>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                <Logo>MOJO</Logo>
              </Link>
            </InnerContainer>

            <InnerContainer>
              <p style={{ color: "var(--color--light)" }}>
                Vi lager perfekte nettsider etter dine behov.
              </p>
            </InnerContainer>

            <InnerContainer>
              <p>
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
              </p>
            </InnerContainer>
          </>
        )}
      </Container>
      <Copyright>
        <Copy>
          mojo-websites.no <AiOutlineCopyright fontSize={20} /> 2022
        </Copy>
      </Copyright>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  display: grid;
  min-height: 30vh;
  z-index: 1000;
  background-color: var(--color--dark);
  grid-template-columns: repeat(3, 2fr);
  @media (max-width: 800px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 2fr);
  }

  p {
    color: var(--color--light);
  }
`;

const Logo = styled.h1`
  cursor: pointer;
  margin: auto 1.2rem;
  font-size: 1.5rem;
  color: var(--color--light);
  transition: all 0.3s ease;
  font-family: "Licorice", cursive;
  @media (max-width: 800px) {
    font-size: 1.2rem;
    margin: 1.2rem;
  }
`;

const InnerContainer = styled.div`
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color--light);
  height: 100%;
  background-color: ${(prop) => prop.color};
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 5vh;
  background-color: var(--color--dark);
  color: var(--color--light);
`;

const Copy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: var(--margin-medium);
`;
