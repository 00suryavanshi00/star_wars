import { useCallback, useEffect, useState } from "react";
import axios from 'axios'; // Reverting to axios for SWAPI

export default function useGetResourceDetail<T>(
  resourceType?: string, 
  id?: string
) {
  const [resource, setResource] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchResourceDetail = useCallback(
    async () => {
      // Reset state at start of fetch
      setIsLoading(true);
      setError(null);

      if (!resourceType || !id) {
        setError("Resource type or ID is missing");
        setIsLoading(false);
        return;
      }

      try {
        const url = `https://swapi.dev/api/${resourceType}/${id}/`;
        const response = await axios.get<T>(url);
        setResource(response.data);
      } catch (err) {
        const errorMessage = err instanceof Error 
          ? err.message 
          : 'Failed to fetch resource details';
        
        console.error('Fetch Error:', errorMessage);
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [resourceType, id]
  );

  useEffect(() => {
    fetchResourceDetail();
  }, [fetchResourceDetail]);

  return { resource, error, isLoading };
}