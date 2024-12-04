import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetResources = <T>(
  endpoint: string, 
  page: number = 1, 
  searchQuery: string = ''
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const baseUrl = 'https://swapi.dev/api';
        
        // Construct the URL with search and page parameters
        const url = new URL(`${baseUrl}${endpoint}`);
        url.searchParams.append('page', page.toString());
        
        // Add search parameter if it exists
        if (searchQuery) {
          url.searchParams.append('search', searchQuery);
        }

        const response = await axios.get(url.toString());
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(
          axios.isAxiosError(err) 
            ? err.response?.data?.detail || 'An error occurred' 
            : 'An unexpected error occurred'
        );
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, page, searchQuery]);

  return { data, error, isLoading };
};

export default useGetResources;