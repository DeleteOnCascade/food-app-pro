import { useState, useEffect } from "react";
import { fetchMeals } from "../https.js";

export function useFetch(initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState("");
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const meals = await fetchMeals();
        setFetchedData(meals);
      } catch (error) {
        setError("Failed to fetch data.");
      }
      setIsFetching(false);
    }
    fetchData();
  }, []);

  return { isFetching, fetchedData, error };
}
