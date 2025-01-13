import MySwiper from "../../../components/swiper/Swiper";
import { EDUCAITON_LIST } from "../../../development/data";

export const EducationModalContent = () => {
  return (
    <div>
      <MySwiper items={EDUCAITON_LIST} />
    </div>
  );
};
