import Carousel from "react-bootstrap/Carousel";
import useProductData from "../../hooks/useProductData";
import CustomCard from "../card/MyCard";
import "./productCarouselle.css";

const ProductCarouselle = () => {
  const { products, isProductLoading } = useProductData();

  if (isProductLoading) {
    return <div className="carouselle__loading">Loading...</div>;
  }

  return (
    <Carousel className="carouselle">
      {products.map((product, index) => (
        <Carousel.Item key={index} className="carouselle__item">
          <CustomCard
            title={product.title}
            description={product.description}
            link={""}
            img={product.image}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarouselle;
