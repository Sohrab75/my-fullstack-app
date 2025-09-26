import { useState,useCallback, useEffect  } from "react";

function useAsync(fn, deps = []) {
  const [data, setData] = useState(null);     // to store the result of fn
  const [error, setError] = useState(null);   // to store any error
  const [loading, setLoading] = useState(false); // to track loading state

  const run = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fn();  // run the async function passed in
      setData(result);            // store the result
    } catch (err) {
      setError(err);              // store any error
    } finally {
      setLoading(false);          // stop loading
    }
  }, deps);

  useEffect(() => {
    if (fn) run(); // automatically run once when deps change
  }, [run]);

  return { data, error, loading, run }; // expose these to the component
}

export default useAsync;
