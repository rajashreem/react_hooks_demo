import React, { useState } from 'react';

function Query() {
    const [query, setQuery] = useState(''); 

    const handleClick = (event) => {
      window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }

    return(
      <div className='form'>
        <input value={query} onChange={(event) => setQuery(event.target.value)}/>
        <button onClick={handleClick}>Search</button>      
      </div>
    );
}

export default Query;
