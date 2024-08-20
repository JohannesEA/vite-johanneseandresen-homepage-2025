import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <img
          src={"/assets/logo.png"}
          alt="Johannes Erdahl Andresen"
          className="hero__image"
        />
        <h1 className="hero__name">Johannes Erdahl Andresenss</h1>
      </div>
      <a
        href="/assets/CV_johannes_erdahl_andresen_2024.pdf"
        className="hero__button"
        download
      >
        Last ned CV
      </a>
    </div>
  );
};

export default Hero;
