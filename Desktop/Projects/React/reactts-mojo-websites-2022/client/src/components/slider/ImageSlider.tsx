import { useState } from "react";
// 1.
import Slider from "react-slick";
import { Project } from "../../models/Project";
import ImageSliderBox from "../image-slider-box/ImageSliderBox";
import "./ImageSlider.css";

interface IImageSlider {
  projects: Project[];
  slidesToShow: number;
}

const ImageSlider = ({ projects, slidesToShow = 3 }: IImageSlider) => {
  // 3.
  const [imageIndex, setImageIndex] = useState(0);

  // 4.
  const settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,

    beforeChange: (current: any, next: any) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // 5.
  const templateImages = projects.map((p, idx) => {
    return (
      <div className={idx === imageIndex ? "activeSlide" : "slide"} key={p.id}>
        <ImageSliderBox
          key={p.title}
          title={p.title}
          icon={p.logo}
          link={p.url}
          description={p.description}
        />
      </div>
    );
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
