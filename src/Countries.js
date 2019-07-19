import React from 'react';
import useOpenApi from './useOpenApi';

function Countries() {
  const countries = useOpenApi({results: []}, 'https://api.openaq.org/v1/countries');

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

