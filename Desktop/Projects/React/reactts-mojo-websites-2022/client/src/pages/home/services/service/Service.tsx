//functions
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import getWindowDimensions from "../../../../universal/Functions";

//styles
import { Wrapper } from "./Service.styles";

//dummydata

import ImageSlider from "../../../../components/slider/ImageSlider";
import { SERVICES } from "../../../../dummydata/data";
import { Project } from "../../../../models/Project";
import SecondNavbar from "../../../../components/navbar/SecondNavbar";

const Service = () => {
  const { width } = getWindowDimensions();
  const location = useLocation();
  const id: string = location.pathname.split("/")[2].toUpperCase();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <SecondNavbar />
      {SERVICES.filter((x) => x.title.toLowerCase() === id.toLowerCase()).map(
        (x) => (
          <div className="service-info-top__container" key={x.title}>
            <div className="service-info-top-inner_container">
              <div className="service-info-top-image-container">
                {width < 800 && (
                  <h3 className="service__top-title">
                    {x.title.toUpperCase()}
                  </h3>
                )}

                <img
                  className="service-info-top-image"
                  src={x.logo}
                  alt={x.title}
                />
              </div>
              <div className="service-info-top-text-container">
                {width > 800 && (
                  <h3 className="service__top-title">
                    {x.title.toUpperCase()}
                  </h3>
                )}
                <p style={{ maxWidth: "700px" }} className="service__top-text">
                  {x.longDescription}
                </p>
                <br></br>
                <p className="service__top-text">
                  {" "}
                  Tid for utvikling: {x.timeForDevelopement}
                </p>
                <p className="service__top-text">Pris: fra {x.price} kr</p>
              </div>
            </div>
          </div>
        )
      )}
      <div className="service-info-middle__container">
        <h3 className="service-info-middle__title">DETTE FØLGER MED</h3>

        <div>
          {SERVICES.filter(
            (x) => x.title.toLowerCase() === id.toLowerCase()
          ).map((x) =>
            x.contentList.map((y) => (
              <ul key={y}>
                <li>
                  <p>{y}</p>
                </li>
              </ul>
            ))
          )}
        </div>
      </div>

      <h3 className="service-info-bottom-title">
        TIDLIGERE PROSJEKTER AV TYPE <i>{id}</i>
      </h3>
      <div className="service-info-bottom__container">
        {SERVICES.filter((x) => x.title.toLowerCase() === id.toLowerCase()).map(
          (x) => (
            <ImageSlider
              key={x.title}
              slidesToShow={3}
              projects={x.portfolio as Project[]}
            />
          )
        )}
      </div>
    </Wrapper>
  );
};

export default Service;
