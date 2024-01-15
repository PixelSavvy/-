import { createClient } from "contentful";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface UseContentfulProps<T> {
  query: string;
  setStateFunction: Dispatch<SetStateAction<T>>;
}

const useContentful = <T,>({
  query,
  setStateFunction,
}: UseContentfulProps<T>) => {
  const [data, setData] = useState<T[]>([]);

  const client = createClient({
    space: "9pmgfh9t51r0",
    accessToken: "PuE_hFF1pCB0Ix5IUNbtsHtbOSqSPvvVeASgbSXBRA8",
    host: "https://cdn.contentful.com",
  });

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await client.getEntries({
          content_type: query,
        });

        if (entries.items) {
          const fieldsArray = entries.items.map((item: any) => item.fields);
          setData(fieldsArray as T[]);
        }
      } catch (error) {
        console.log(`Failed to fetch articles ${error}`);
      }
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    if (data.length > 0) {
      setStateFunction(data as T);
    }
  }, [data, setStateFunction]);

  return data;
};

export default useContentful;
