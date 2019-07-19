import { useState, useEffect } from 'react';

function useOpenApi(intialState, url) {
  const [results, setResults] = useState(intialState); 

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      setResults(json);
    })
  }, []);

  return results;
}

export default useOpenApi;

