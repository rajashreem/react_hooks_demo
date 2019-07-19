import React, { useState, useEffect } from 'react';

function Quote() {
  const [quoteObject, setQuoteObject] = useState({}); 

  useEffect(() => {
    fetch('http://quotes.stormconsultancy.co.uk/random.json')
    .then((response) => response.json())
    .then(json => setQuoteObject(json))
  }, []);

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

