import { useState, useEffect } from 'react';

// Custom hook for handling search functionality
const useSearch = (data: any[], query: string) => {
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    if (query) {
      const filtered = data?.filter((item) => {
        const resourceName = item.title || item.name; // Check for either title or name
        return resourceName?.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, query]);

  return { filteredData };
};

export default useSearch;
