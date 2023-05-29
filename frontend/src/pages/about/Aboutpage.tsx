import React from "react";
import AboutHero from "./hero/AboutHero";
import Footer from "../../components/footer/Footer";
import SimpleNavbar from "../../components/navbar/NavbarWithBackArrow";

const Aboutpage = () => {
  return (
    <div>
      <SimpleNavbar />
      <AboutHero />
      <Footer />
    </div>
  );
};

export default Aboutpage;
