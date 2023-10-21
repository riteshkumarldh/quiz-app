import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Response not received from the server");
        }

        const result = await res.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.log("error while fetching data");
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, error, data };
};
