import React from "react";
import "./products.css";
import SimpleSlider from "../../../components/slider/CardSlider";

const Products: React.FC = () => {
  return (
    <div className="products">
      <h1 className="medium-margin-bottom">Våre produkter</h1>
      <SimpleSlider />
    </div>
  );
};

export default Products;
