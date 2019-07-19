import React, {useState} from 'react';
import useOpenApi from './useOpenApi';

function Countries(props) {
  const countries = useOpenApi({results: []}, 'https://api.openaq.org/v1/countries');
  const [selectedCountryCode, setSelectedCountryCode] = useState('IN');

  const countryToDisplay = countries.results.find((country) => country.code === selectedCountryCode);

  return(
    <div>
      <h2>Countries</h2>
      <select value={selectedCountryCode} onChange={(event) => setSelectedCountryCode(event.target.value)}>
        {
          countries.results.map(country => {
            return <option key={country.code} value={country.code}>{country.code}</option>
          })
        }
      </select>
      
      {countryToDisplay && <p>Country with country code {countryToDisplay.code} is {countryToDisplay.name}</p>}
    </div>
  )
}

export default Countries;

