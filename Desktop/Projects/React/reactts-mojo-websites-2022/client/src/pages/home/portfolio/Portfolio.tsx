import React from "react";
import ImageSlider from "../../../components/slider/ImageSlider";
import { Project } from "../../../models/Project";
import { Wrapper } from "./Portfolio.styles";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "WestBMusic",
    type: "Nettbutikk",
    description:
      "WestBMusic ble laget som en kjøp/salgs nettside for musikk. Dette er en dynamisk løsning der eieren av siden kan endre på alt av innhold enkelt med en administasjonsløsning",
    logo: "/assets/logos/wbm.png",
    images: ["", "", ""],
    url: "https://west-b-music.netlify.app/",
    price: 15000,
  },
  {
    id: 2,
    title: "Bærum Trefelling",
    type: "Informasjon",

    description:
      "Bærum trefelling er en enkel informasjonsnettside for informasjon av tjenester innen trefelling i Asker og Bærum. ",
    logo: "/assets/logos/BT.jpg",
    images: ["", "", ""],
    url: "https://baerumtrefelling.netlify.app/",
    price: 5000,
  },
  {
    id: 3,
    title: "Physio Teacher",
    type: "Informasjon",

    description:
      "Physio Teacher informasjons nettside for informasjon om en applikasjon mojo-websites utvikler.",
    logo: "/assets/logos/pt-main-logo.png",
    images: ["", "", ""],
    url: "https://physioteacher.no/",
    price: 5000,
  },
  {
    id: 4,
    title: "Johannes Erdahl Andresen",
    type: "Informasjon",

    description:
      "Dette er en portfølje nettside for utvikleren av Mojo websites. ",
    logo: "/assets/logos/jea.png",
    images: ["", "", ""],
    url: "https://johanneseandresen.netlify.app/",
    price: 5000,
  },

  {
    id: 5,
    title: "EB Vinduer",
    type: "Informasjon",
    description:
      "Dette er en informasjons nettside for salg og restaurering av vinduer ",
    logo: "/assets/logos/EBvinduer.png",
    images: ["", "", ""],
    url: "https://ebvinduer.no/",
    price: 5000,
  },
];

const Portfolio = () => {
  return (
    <Wrapper id="portfolio">
      <h2>PORTEFØLE</h2>
      <ImageSlider projects={PROJECTS} slidesToShow={3} />
    </Wrapper>
  );
};

export default Portfolio;
