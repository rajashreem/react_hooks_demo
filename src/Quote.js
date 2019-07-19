import React from 'react';
import useOpenApi from './useOpenApi';

function Quote() {
  const quoteObject = useOpenApi({}, 'http://quotes.stormconsultancy.co.uk/random.json');
  const {quote, author} = quoteObject;

  return(
    <div>
      <h2>Quote of the day</h2>
      <h3><em>{quote}</em></h3>
      <h4>- {author}</h4>
    </div>
  )
}

export default Quote;

