import { useState, useEffect, useCallback } from "react";
import { client } from "../contentful/config";

export interface ProductProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const useProductData = () => {
  const [isProductLoading, setIsProductLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const cleanUpProducts = useCallback((rawData: any[]) => {
    const cleanedProducts = rawData.map((product) => {
      const { sys, fields } = product;
      const { id } = sys;
      const title = fields.title;
      const description = fields.description;
      const image = fields.image.fields.file.url;
      const updatedProduct = { id, title, description, image };
      return updatedProduct;
    });

    setProducts(cleanedProducts);
  }, []);

  const getProducts = useCallback(async () => {
    setIsProductLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "flowerStoreProducts",
      });
      const responseData = response.items;
      if (responseData) {
        cleanUpProducts(responseData);
      } else {
        setProducts([]);
      }
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setIsProductLoading(false);
    }
  }, [cleanUpProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return { products, isProductLoading, error };
};

export default useProductData;
