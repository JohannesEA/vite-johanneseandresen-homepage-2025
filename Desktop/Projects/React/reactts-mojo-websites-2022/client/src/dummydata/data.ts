export const HOMEPAGE = {
  HeroTitle: "MOJO WEBSITES",
  HeroSubtitle: "Perfekte nettsider for dine behov",
  HeroImg: "/assets/logos/logo7.png",
  AboutTitle: "OM OSS",
  AboutSubtitle:
    "MoJo Websites består av motiverte og flinke utviklere som har et brennende ønske om å utvikle nettsider etter dine behov. Vi ønsker å lage smarte, effektive og brukervennelige løsninger som passer for alle type skjermer.",
  Aboutimg: "/assets/icons/responsive-design.png",
  ServicesTitle: "TJENESTER",
  ServicesSubtitle:
    "Vi tilbyr to ulike nettsider. En informasjonsnettside og en ecommerse (nettbutikk) nettside. Disse ulike typene har ulik vanskelighetsgrad, og har derfor ulik pris og utviklingstid.",
  ServiceOne: "Informasjonsnettide",
  ServiceTwo: "Portføljenettside",
  ServiceThree: "Kjøp/salgs nettside",

  PortfolioTitle: "PORTFØLJE",
  ContactTitle: "KONTAKT OSS",
};

export const SERVICES = [
  {
    id: "information-website",
    title: "Informasjon",

    description: "Informasjons løsning av nettside",
    contentList: [
      "Nettside med minst 5 sider",
      "Innloggingsmulighet for admin",
      "Kontaktmuligheter for brukere",
      "Logo for din bedrift",
    ],
    longDescription:
      "Ønsker du en nettside som viser frem din bedrift på en oversiktlig og bra måte samt gir kundene smarte kontaktløsninger? Da er en informasjonsnettside perfekt for deg. Dette er nettsider som skal vise frem produktet/bedriften på en svært oversiktlig måte og gi kundene gode muligheter for å lese seg opp på produktet/bedriften og kontakte bedriften/eieren. Våre løsninger er effektive, oversiktelige og smarte til en billig penge. Er dette noe for deg? Ta kontakt og beskriv dine behov! ",
    timeForDevelopement: "14 dager",
    logo: "/assets/icons/icon6.png",
    portfolio: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
        title: "EB Vinduer",
        type: "Informasjon",
        description:
          "Dette er en informasjons nettside for salg og restaurering av vinduer ",
        logo: "/assets/logos/EBvinduer.png",
        images: ["", "", ""],
        url: "https://ebvinduer.no/",
        price: 5000,
      },
      {
        id: 4,
        title: "Physio Teacher",
        type: "Informasjon",

        description:
          "Physio Teacher informasjons nettside for informasjon om en applikasjon mojo-websites utvikler.",
        logo: "/assets/logos/pt-main-logo.png",
        images: ["", "", ""],
        url: "https://physioteacher.no/",
        price: 5000,
      },
    ],
    price: 6500,
    path: "/service/Informasjon",
    backgroundColor: "var(--color-5)",
    color: "var(--color-text-dark)",
    hover: "var(--color-5-hover)",
  },
  {
    id: "ecommerce-website",
    title: "Nettbutikk",
    description: "Nettbutikk løsning av nettside",
    contentList: [
      "Nettside med minst 5 sider",
      "Innloggingsmulighet for admin",
      "Innloggingsmulighet for brukere",
      "Kontaktmuligheter for brukere",
      "Logo for din bedrift",
      "Database med sikkerhet",
    ],
    longDescription:
      "Nettbutikk løsning av nettside er en dynamisk kjøp/salgs nettside. Dette fungerer perfekt for deg som ønsker å starte din egen nettbutikk. Når vi lager disse løsningene har vi stort fokus på datasikkerhet, og det er derfor prisen er høyere enn de andre nettsidene. ",
    timeForDevelopement: "1 mnd",

    logo: "/assets/icons/icon5.png",
    portfolio: [
      {
        id: 1,
        title: "SBG2",
        type: "Nettbutikk",
        description:
          "SBG2 ble laget som en kjøp/salgs nettside for mat. Dette er en dynamisk løsning der eieren av siden kan endre på alt av innhold enkelt med en administasjonsløsning",
        logo: "/assets/logos/wbm.png",
        images: ["", "", ""],
        url: "https://sbg2.netlify.app/",
        price: 15000,
      },
      {
        id: 2,
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
        id: 3,
        title: "Skeive Stilker",
        type: "Nettbutikk",
        description:
          "Skeive Stilker ble laget som en kjøp/salgs nettside for blomster. Dette er en dynamisk løsning der eieren av siden kan endre på alt av innhold enkelt med en administasjonsløsning",
        logo: "/assets/logos/sb.png",
        images: ["", "", ""],
        url: "https://skeive-blomster.netlify.app/",
        price: 15000,
      },
    ],
    price: 15000,
    path: "/service/Nettbutikk",
    backgroundColor: "var(--color-5)",
    color: "var(--color-text-dark)",
    hover: "var(--color-5-hover)",
  },
];

export const PROJECTS = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
    title: "EB Vinduer",
    type: "Informasjon",
    description:
      "Dette er en informasjons nettside for salg og restaurering av vinduer ",
    logo: "/assets/logos/EBvinduer.png",
    images: ["", "", ""],
    url: "https://ebvinduer.no/",
    price: 5000,
  },
  {
    id: "6",
    title: "Skeive Stilker",
    type: "Nettbutikk",
    description:
      "Skeive Stilker ble laget som en kjøp/salgs nettside for blomster. Dette er en dynamisk løsning der eieren av siden kan endre på alt av innhold enkelt med en administasjonsløsning",
    logo: "/assets/logos/sb.png",
    images: ["", "", ""],
    url: "https://skeive-blomster.netlify.app/",
    price: 15000,
  },
  {
    id: "7",
    title: "SBG2",
    type: "Informasjon",
    description:
      "SBG2 ble laget som en informasjons/bestillings/booking nettside for restaurant/bar. Dette er en dynamisk løsning der eieren av siden kan endre på alt av innhold enkelt med en administasjonsløsning",
    logo: "/assets/logos/SBG2 (1).png",
    images: ["", "", ""],
    url: "https://skeive-blomster.netlify.app/",
    price: 15000,
  },
];
