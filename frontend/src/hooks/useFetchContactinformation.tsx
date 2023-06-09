import { useState, useEffect, useCallback } from "react";
import { client } from "../contentful/config";

// New interface for Contact information
export interface ContactProps {
  id: string;
  email: string;
  phonenumber: string;
  adress: string;
}

// New hook to fetch Contact data
const useContactInfo = () => {
  const [data, setData] = useState<ContactProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const cleanUpData = useCallback((rawData: any) => {
    const { sys, fields } = rawData;
    const { id } = sys;
    const email = fields.email;
    const phonenumber = fields.phonenumber;
    const adress = fields.adress;

    const updatedItem = { id, email, phonenumber, adress };
    setData(updatedItem);
  }, []);

  const getCustomData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "flowerStoreContactInformation", // make sure this is the correct content type in your Contentful
      });
      const responseData = response.items[0];
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

export default useContactInfo;
