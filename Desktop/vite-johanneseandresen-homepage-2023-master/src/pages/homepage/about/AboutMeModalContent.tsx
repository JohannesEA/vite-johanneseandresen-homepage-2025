export const AboutMeModalContent = () => {
  return (
    <div>
      <h3 className="about__card-label">Om meg</h3>
      <p className="about__modal-content">
        Jeg er en 27 år gammel mann som brenner for teknologi og utvikling. Som
        fullstack-utvikler hos Eika får jeg utnyttet mine ferdigheter og lærer
        nye ting hver dag. Men det stopper ikke på kontoret - jeg har alltid et
        par sideprosjekter på gang som holder meg skjerpet og engasjert.
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
