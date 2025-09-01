import { useState, useEffect } from 'react';

function useApropos() {
  const [apropos, setApropos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/apropos.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch apropos data');
        }
        return response.json();
      })
      .then((data) => {
        setApropos(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return { apropos, isLoading, error };
}

export default useApropos;