import { AboutDetails, AboutLabels, ColorColumnProps, SwiperItem } from "../types";

export const EDUCAITON_LIST: SwiperItem[] = [
    { title: "OsloMet", img: "/assets/OsloMet.png", description: "Dataingeniør, bachelor", year: "2019-2022" },
    { title: "NTNU", img: "/assets/NTNU.png", description: "Forkurs, ingeniør", year: "2018-2019" },
    { title: "Forsvaret", img: "/assets/Forsvaret.png", description: "Luftforsvaret", year: "2017-2018" },
    { title: "Nesbru VGS", img: "/assets/Nesbru-vgs.png", description: "Studiespesialiserende fag", year: "2013-2016" },

];

export const EXPERIENCE_LIST: SwiperItem[] = [
    { title: "Aize", img: "/assets/Aize.png", description: "Summerintern", year: "Sommer 2021" },
    { title: "Eika", img: "/assets/Eika.png", description: "Fullstack utvikler", year: "Feb 2022 - " },
    { title: "Erdahl Andresen IT", img: "/assets/EAIT.png", description: "Eget firma", year: "August 2022 -" },
];


export const LANGUAGES: ColorColumnProps[] = [
    { title: "Norsk", description: "Morsmål", expertise: 100 },
    { title: "Engelsk", description: "Flytende", expertise: 80 },
];


export const PROGRAMMING_LANGUAGES: ColorColumnProps[] = [
    { title: "Typescript", description: "3 års erfaring", expertise: 90 },
    { title: "Javascript", description: "3 års erfaring", expertise: 90 },
    { title: "Kotlin", description: "3 års erfaring", expertise: 80 },
    { title: "Java", description: "4 års erfaring", expertise: 80 },
    { title: "C#", description: "1 års erfaring", expertise: 70 },
    { title: "Python", description: "1 års erfaring", expertise: 60 },
];

export const FRAMEWORKS: ColorColumnProps[] = [
    { title: "React", description: "3 års erfaring", expertise: 90 },
    { title: "React-native", description: "2 års erfaring", expertise: 90 },
    { title: "Ktor", description: "1 års erfaring", expertise: 70 },
    { title: "Spring", description: "2 års erfaring", expertise: 70 },
    { title: "Angular", description: "1 års erfaring", expertise: 60 },
    { title: "Django", description: "1 års erfaring", expertise: 50 },
];



export const ABOUT_DETAILS: AboutDetails[] = [
    { label: AboutLabels.Age, value: "Jeg er en 26 år gammel mann som brenner for teknologi og utvikling..." },
    { label: AboutLabels.Education, value: "Dataingeniør" },
    { label: AboutLabels.Experience, value: ">2 år som fullstack utvikler" },
    { label: AboutLabels.Languages, value: "Norsk, Engelsk" },
    {
        label: AboutLabels.ProgrammingLanguages,
        value: "Kotlin, Java, Javascript, Typescript, Python",
    },
    {
        label: AboutLabels.Frameworks,
        value: "React, Ktor, Firebase, React-native",
    },
];