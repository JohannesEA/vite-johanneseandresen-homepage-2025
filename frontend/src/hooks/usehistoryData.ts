import { useState, useEffect, useCallback } from "react";
import { client } from "../contentful/config";

export interface HistoryProps {
  id: string;
  title: string;
  description: string;
  slogan?: string;
  image: string;
}

const useHistoryData = () => {
  const [isHistoryLoading, setIsHistoryLoading] = useState<boolean>(false);
  const [history, setHistory] = useState<HistoryProps[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const cleanUpHistory = useCallback((rawData: any[]) => {
    const cleanedHistory = rawData.map((history) => {
      const { sys, fields } = history;
      const { id } = sys;
      const title = fields.title;
      const description = fields.description;
      const slogan = fields.slogan;
      const image = fields.image.fields.file.url;
      const updatedHistory = { id, title, description, slogan, image };
      return updatedHistory;
    });

    setHistory(cleanedHistory);
  }, []);

  const getHistory = useCallback(async () => {
    setIsHistoryLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "flowerStoreHistory",
      });
      const responseData = response.items;
      if (responseData) {
        cleanUpHistory(responseData);
      } else {
        setHistory([]);
      }
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setIsHistoryLoading(false);
    }
  }, [cleanUpHistory]);

  useEffect(() => {
    getHistory();
  }, [getHistory]);

  return { history, isHistoryLoading, error };
};

export default useHistoryData;
