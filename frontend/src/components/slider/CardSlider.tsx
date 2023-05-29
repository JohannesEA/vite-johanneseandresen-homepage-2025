import Slider, { Settings } from "react-slick";
import { ProductProps } from "../../hooks/useProductData";
import CustomCard from "../card/MyCard";
import { useWindowWidth } from "../../utils/utils";
import "./cardSlider.css";

interface ISimpleSlider {
  products: ProductProps[];
}
const SimpleSlider: React.FC<ISimpleSlider> = ({ products }) => {
  const screenwidth = useWindowWidth();

  const calculateColumns = () => {
    if (screenwidth > 1200) {
      return 3;
    } else if (screenwidth >= 768 && screenwidth <= 1200) {
      return 2;
    } else {
      return 1;
    }
  };

  var settings: Settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: calculateColumns(),
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="slider">
      {products.map((product, index) => (
        <CustomCard
          key={index}
          title={product.title}
          description={product.description}
          link={""}
          img={product.image}
        />
      ))}
    </Slider>
  );
};

export default SimpleSlider;
