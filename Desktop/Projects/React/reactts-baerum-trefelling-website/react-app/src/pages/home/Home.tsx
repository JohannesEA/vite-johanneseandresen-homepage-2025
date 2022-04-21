import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import About from "./about/About";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Wrapper } from "./Home.styles";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <Wrapper>
      <Link
        className="navbar__link"
        to="hero"
        spy={true}
        smooth={true}
        offset={-100}
        duration={300}
      >
        <BsFillArrowUpSquareFill
          className="fab__button"
          size={40}
          color={"var(--color--secondary)"}
        />
      </Link>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </Wrapper>
  );
};

export default Home;
