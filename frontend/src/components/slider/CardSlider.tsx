import Slider from "react-slick";
import useProductData from "../../hooks/useProductData";
import CustomCard from "../card/MyCard";
import { useWindowWidth } from "../../utils/utils";
import "./cardSlider.css";

export default function SimpleSlider() {
  const { products, isProductLoading } = useProductData();

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

  if (isProductLoading) {
    return <div className="carouselle__loading">Loading...</div>;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: calculateColumns(),
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
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
}
