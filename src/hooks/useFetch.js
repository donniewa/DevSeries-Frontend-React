import { useEffect, useState } from 'react';

export const defaultOptions = {
  method: 'GET',
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {},
};
/**
 * useFetch hook will fetch the data for us and return the values in a nice hook
 */
export default function useFetch(url, options = defaultOptions) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setData(null);
    setError(null);
    setLoading(true);

    fetch(url, options)
      .then((response) => response.json())
      .then(
        // handling the result
        (result) => {
          setLoading(false);
          setData(result);
        },
        // handling the error here
        (error) => {
          setLoading(false);
          setError(error);
        }
      );
  }, [url, options]);

  /**
   * Returns the data and state here.
   */
  return { data, error, loading };
}
