// src/hooks/useHouses.js
import { useState, useEffect } from 'react';

function useHouses() {
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/houses.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch houses data');
        }
        return response.json();
      })
      .then((data) => {
        setHouses(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return { houses, isLoading, error };
}

export default useHouses;
