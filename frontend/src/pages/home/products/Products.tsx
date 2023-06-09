import React from "react";
import "./products.css";
import SimpleSlider from "../../../components/slider/CardSlider";
import { ProductProps } from "../../../hooks/useProductData";

interface IProducts {
  products: ProductProps[];
}

const Products: React.FC<IProducts> = ({ products }) => {
  return (
    <div id="products" className="products">
      <SimpleSlider products={products} />
    </div>
  );
};

export default Products;
