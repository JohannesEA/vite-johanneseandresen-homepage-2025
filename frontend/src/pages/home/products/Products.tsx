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
      <h1 className="medium-margin-bottom">Våre produkter</h1>
      <SimpleSlider products={products} />
    </div>
  );
};

export default Products;
