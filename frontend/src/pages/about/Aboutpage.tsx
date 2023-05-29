import React from "react";
import AboutHero from "./hero/AboutHero";
import Footer from "../../components/footer/Footer";
import SimpleNavbar from "../../components/navbar/NavbarWithBackArrow";
import useHistoryData from "../../hooks/usehistoryData";
import FlowerAnimation from "../../animations/FlowerAnimation";

const Aboutpage = () => {
  const { history, isHistoryLoading } = useHistoryData();

  const showLoadingAnimation = isHistoryLoading;

  return (
    <>
      {showLoadingAnimation ? (
        <div className="animation__container">
          <FlowerAnimation />
        </div>
      ) : (
        <div>
          <SimpleNavbar />
          <AboutHero history={history} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Aboutpage;
