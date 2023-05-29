import Carousel from "react-bootstrap/Carousel";
import { ProductProps } from "../../hooks/useProductData";
import CustomCard from "../card/MyCard";
import "./productCarouselle.css";

interface IProductCarouselle {
  products: ProductProps[];
}

const ProductCarouselle: React.FC<IProductCarouselle> = ({ products }) => {
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
