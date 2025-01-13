export const AboutMeModalContent = () => {
  return (
    <div>
      <h3 className="about__card-label">Om meg</h3>
      <p className="about__modal-content">
      Jeg er en 27 år gammel teknologi-entusiast med en lidenskap for utvikling.
       Som fullstack-utvikler hos Sonat får jeg muligheten til å utnytte mine ferdigheter på tvers av hele utviklingsstakken, fra frontend-design til backend-logikk.
        Hver dag gir meg nye utfordringer og muligheter til å lære, noe som holder meg motivert og engasjert.
      </p>

      <a href="https://github.com/JohannesEA" className="about__button">
        Github
      </a>
      <a
        href="/assets/CV_johannes_erdahl_andresen_2024.pdf"
        className="about__button"
        download
      >
        Last ned CV
      </a>
    </div>
  );
};
