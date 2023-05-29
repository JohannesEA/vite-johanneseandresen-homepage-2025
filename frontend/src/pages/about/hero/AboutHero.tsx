import ImageAndTextContainer from "../../../components/imageAndTextContainer/ImageAndTextContainer";
import useHistoryData from "../../../hooks/usehistoryData";
import "./aboutHero.css";

const AboutHero = () => {
  const { history } = useHistoryData();

  const revertImage = (index: number) => {
    if (index % 2 === 0) {
      return true;
    }
    return false;
  };

  return (
    <div className={"about-hero"}>
      {history.map((h, index) => (
        <ImageAndTextContainer
          title={h.title}
          description={h.description}
          img={h.image}
          switch={revertImage(index)}
        />
      ))}
    </div>
  );
};

export default AboutHero;
