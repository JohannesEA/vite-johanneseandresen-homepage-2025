import { useState, useEffect, useCallback } from "react";
import { client } from "../contentful/config";

interface AboutProps {
  id: string;
  title: string;
  description: string;
  slogan: string;
}

const useAboutData = () => {
  const [data, setData] = useState<AboutProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const cleanUpData = useCallback((rawData: any) => {
    const { sys, fields } = rawData;
    const { id } = sys;
    const title = fields.title;
    const description = fields.description;
    const slogan = fields.slogan;

    const updatedItem = { id, title, description, slogan };
    setData(updatedItem);
  }, []);

  const getCustomData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "flowerStoreAbout",
      });
      const responseData = response.items[0]; // assuming only one entry for 'About'
      if (responseData) {
        cleanUpData(responseData);
      } else {
        setData(null);
      }
    } catch (error: any) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [cleanUpData]);

  useEffect(() => {
    getCustomData();
  }, [getCustomData]);

  return { data, loading, error };
};

export default useAboutData;
