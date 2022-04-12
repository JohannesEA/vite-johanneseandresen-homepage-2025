import Navbar from "../../components/navbar/Navbar";
import About from "./about/About";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
