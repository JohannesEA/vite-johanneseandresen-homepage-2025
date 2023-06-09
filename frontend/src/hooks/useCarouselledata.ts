import { useState, useEffect, useCallback } from "react";
import { client } from "../contentful/config";

export interface CarouselleProps {
  title: string;
  description: string;
  image: string;
}

const useCarouselleData = () => {
  const [isCarouselleLoading, setIsCarouselleLoading] =
    useState<boolean>(false);
  const [carouselleSlides, setCarouselleSlides] = useState<
    Array<CarouselleProps>
  >([]);

  const cleanUpCarouselleSlides = useCallback((rawData: any[]) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const title = fields.title;
      const description = fields.description;
      const image = fields.image.fields.file.url;
      const updatedSlide = { id, title, description, image };
      return updatedSlide;
    });

    setCarouselleSlides(cleanSlides);
  }, []);

  const getCarouselleSlides = useCallback(async () => {
    setIsCarouselleLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "flowerStoreCarouselle",
      });
      const responseData = response.items;
      if (responseData) {
        cleanUpCarouselleSlides(responseData);
      } else {
        setCarouselleSlides([]);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsCarouselleLoading(false);
    }
  }, [cleanUpCarouselleSlides]);

  useEffect(() => {
    getCarouselleSlides();
  }, [getCarouselleSlides]);

  return { carouselleSlides, isCarouselleLoading };
};

export default useCarouselleData;
