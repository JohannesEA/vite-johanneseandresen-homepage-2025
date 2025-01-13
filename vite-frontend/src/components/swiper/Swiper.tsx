import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.scss";
import "swiper/css/pagination";
import { SwiperItem } from "../../types";
import useScreenSize from "../../hooks/useScreenSize";
import Card from "../card/Card";
import { Pagination } from "swiper/modules";

interface SwiperProps {
  items: SwiperItem[];
}

const MySwiper = ({ items }: SwiperProps) => {
  const screenSize = useScreenSize();

  const getAmountOfSlides = () => {
    if (screenSize.width < 500) return 1;
    else if (screenSize.height > 500 && screenSize.width < 950) return 2;
    else return 3;
  };

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }} // Enable clickable pagination
      spaceBetween={50}
      slidesPerView={getAmountOfSlides()}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper"
      resizeObserver={true}
    >
      {items.map((item) => (
        <SwiperSlide>
          <Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
