import MySwiper from "../../../components/swiper/Swiper";
import { EXPERIENCE_LIST } from "../../../development/data";

export const ExperienceModalContent = () => {
  return (
    <div>
      <MySwiper items={EXPERIENCE_LIST} />
    </div>
  );
};
