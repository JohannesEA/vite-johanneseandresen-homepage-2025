import { Wrapper } from "./About.styles";
import getWindowDimensions from "../../../Functions";

const ABOUT__CONTENT = [
  {
    id: 1,
    text: "Sett bedre tider",
  },
  {
    id: 2,
    text: "Blitt for stort",
  },
  {
    id: 3,
    text: "Plassmangel sykdom/skade",
  },
  {
    id: 4,
    text: "Står i veien for bygninger",
  },
  {
    id: 5,
    text: "Står i veien for kabler",
  },
  {
    id: 6,
    text: "Sykdom/skade",
  },
];

const About = () => {
  const { width } = getWindowDimensions();
  return (
    <Wrapper id="about">
      <h3 className="about__title">OM OSS</h3>
      <div className="about__content-container">
        <div>
          <div className="about__list-container">
            <p className="about__text">
              Vi er spesialister på presisjonsfelling av trær som må felles
              fordi treet har:
            </p>
            <div className="about__list">
              {ABOUT__CONTENT.map((p) => (
                <ul key={p.id}>
                  <li>
                    <p>{p.text}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        {width >= 800 && (
          <img
            className="about__img"
            src="/assets/images/atle.png"
            alt="Worker in a tree"
          />
        )}
      </div>
    </Wrapper>
  );
};

export default About;
