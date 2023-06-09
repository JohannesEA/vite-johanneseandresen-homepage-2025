import React from "react";
import AboutHero from "./hero/AboutHero";
import Footer from "../../components/footer/Footer";
import SimpleNavbar from "../../components/navbar/NavbarWithBackArrow";
import useHistoryData from "../../hooks/usehistoryData";
import FlowerAnimation from "../../animations/FlowerAnimation";
import useContactInfo from "../../hooks/useFetchContactinformation";

const Aboutpage = () => {
  const { history, isHistoryLoading } = useHistoryData();
  const { data: contactinfo, loading: contactinfoLoading } = useContactInfo();

  const showLoadingAnimation = isHistoryLoading || contactinfoLoading;

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
          <Footer data={contactinfo} />
        </div>
      )}
    </>
  );
};

export default Aboutpage;
