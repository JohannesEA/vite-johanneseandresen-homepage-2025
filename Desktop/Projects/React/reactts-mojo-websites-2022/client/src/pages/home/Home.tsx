import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import About from "./about/About";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";
import { Link } from "react-scroll";
import { FloatingActionButton } from "./services/service/Service.styles";
import { IoIosArrowUp } from "react-icons/io";
import TopOrderWebsiteBar from "../../components/top-order-website-bar/TopOrderWebsiteBar";
import { setMenuIsActiveAction } from "../../redux/actions";
import { Spiral as Hamburger } from "hamburger-react";
import { useDispatch } from "react-redux";
import getWindowDimensions from "../../universal/Functions";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showFab, setFab] = useState(false);
  const makeFABVisible = () => {
    if (window.scrollY >= 100) {
      setFab(true);
    } else {
      setFab(false);
    }
  };

  const dispatch = useDispatch();
  const { width } = getWindowDimensions();

  window.addEventListener("scroll", makeFABVisible);

  return (
    <div>
      <TopOrderWebsiteBar />
      {width < 800 && (
        <div className="fab__menu-button">
          <Hamburger onToggle={() => setMenuIsActiveAction(dispatch)} />
        </div>
      )}
      <Navbar />
      {showFab && (
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
          <FloatingActionButton style={{ width: "80px" }}>
            <IoIosArrowUp size={30} />
          </FloatingActionButton>
        </Link>
      )}

      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
