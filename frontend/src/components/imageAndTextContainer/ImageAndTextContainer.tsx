import React from "react";
import "./imageAndTextContainer.css";
import { useMediaQuery } from "react-responsive";

interface ImageAndTextContainerProps {
  title: string;
  description: string;
  slogan?: string;
  img: string;
  switch: boolean;
}

const ImageAndTextContainer: React.FC<ImageAndTextContainerProps> = ({
  title,
  description,
  slogan,
  img,
  switch: imgSwitch,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 999 });

  if (isMobile) {
    return (
      <div className="image-text-container">
        <div className="image-text-container__image">
          <img src={img} alt={title} />
        </div>
        <div className="image-text-container__text">
          <h1>{title}</h1>
          {slogan && <h2>{slogan}</h2>}
          <p className="medium-margin-top">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="image-text-container">
      {imgSwitch ? (
        <>
          <div className="image-text-container__image">
            <img src={img} alt={title} />
          </div>
          <div className="image-text-container__text">
            <h1>{title}</h1>
            {slogan && <h2>{slogan}</h2>}
            <p className="medium-margin-top">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="image-text-container__text">
            <h1>{title}</h1>
            {slogan && <h2>{slogan}</h2>}
            <p className="medium-margin-top">{description}</p>
          </div>
          <div className="image-text-container__image">
            <img src={img} alt={title} />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageAndTextContainer;
