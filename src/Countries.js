import React, { useState, useEffect } from 'react';

function Countries() {
  const [countries, setCountries] = useState({results: []}); 

  useEffect(() => {
    fetch('https://api.openaq.org/v1/countries')
    .then((response) => response.json())
    .then(json => {
      setCountries(json);
    })
  }, []);

  return(
    <div>
      <h2>Countries</h2>
      {
        countries.results.map(country => {
          const {name, code} = country;
          return <p key={code}>{code}-{name}</p>
        })        
      }
    </div>
  )
}

export default Countries;

