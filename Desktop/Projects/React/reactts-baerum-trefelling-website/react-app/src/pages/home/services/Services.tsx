import Slider from "react-slick";
import ServiceBox from "../../../components/service-box/ServiceBox";
import { Wrapper } from "./Services.styles";
import getWindowDimensions from "../../../Functions";
import { useState } from "react";

const POINTS = [
  "Type tre, størrelse og antall.",
  "Tilgjengelighet ",
  "Eventuell bortkjøring av kvist og tømmer.",
  "Kapping av tømmer osv.",
];

const SERVICES = [
  <ServiceBox
    icon="/assets/icons/worker.png"
    title="Verdier"
    desc="Trefellingen utføres på en effektiv og sikker måte."
  />,
  <ServiceBox
    icon="/assets/icons/park.png"
    title="Område"
    desc="Vi tar oppdrag hovedsaklig i Asker og Bærum. Vi er ansvarsforsikret inntil 10.000.000 Kr."
  />,
  <ServiceBox
    icon="/assets/icons/dollar.png"
    title="Pris"
    desc="Prisen bestemmes av:"
    array={POINTS}
  />,
];

const Services = () => {
  const { width, height } = getWindowDimensions();

  const handleSlidesToShow = () => {
    switch (true) {
      case width > 800:
        return 3;
      case width < 800 && width > 500:
        return 2;
      case width < 800:
        return 1;
      default:
        return 1;
    }
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: handleSlidesToShow(),
    slidesToScroll: 1,
  };

  return (
    <Wrapper id="services">
      <h3>TJENESTER</h3>
      <Slider className="service__slider" {...settings}>
        {SERVICES}
      </Slider>
    </Wrapper>
  );
};

export default Services;
