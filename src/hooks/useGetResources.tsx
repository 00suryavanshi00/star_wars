import { useCallback, useEffect, useState } from "react";
import apiClient from "../utils/apiclient";

export interface SwapiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export default function useGetResources<T>(
  endpoint: string, 
  page: number = 1, 
  searchQuery: string = ''
) {
  const [data, setData] = useState<SwapiResponse<T> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(
    async () => {
      setIsLoading(true);

      if (!endpoint) {
        console.log("No endpoint was provided");
        setIsLoading(false);
        return;
      }

      try {
        // Construct the URL with page and optional search query
        const url = searchQuery 
          ? `${endpoint}?page=${page}&search=${searchQuery}` 
          : `${endpoint}?page=${page}`;

        const res = await apiClient.get<SwapiResponse<T>>(url);
        setData(res);
      } catch (err) {
        const errorMessage = err instanceof Error 
          ? err.message 
          : 'Something went wrong bruhhh!!';
        
        console.error('Fetch Error:', errorMessage);
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [endpoint, page, searchQuery]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isLoading };
}