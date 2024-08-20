export interface SwiperItem {
    title: string;
    description: string;
    img: string;
    year?: string;
}

export interface ColorColumnProps {
    title: string;
    description?: string;
    expertise: number;
}

export enum AboutLabels {
    Age = "Om meg",
    Education = "Utdannelse",
    Experience = "Erfaring",
    Languages = "Språk",
    ProgrammingLanguages = "Programmeringsspråk",
    Frameworks = "Rammeverk",
}

export interface AboutDetails {
    label: AboutLabels;
    value: string;
}
