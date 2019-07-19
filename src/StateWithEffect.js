import React, { useState, useEffect } from 'react';

function StateWithEffect() {
    const [count, setCount] = useState(0); 
    const [name, setName] = useState(''); 

    useEffect(() => {
      document.title = `${count} times`;
    })

    return(
      <div>
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => {setCount(count+1)}}>Click me to increase count</button>
          <button onClick={() => {setCount(count-1)}}>Click me to decrease count</button>
        </div>
        <div className='form'>
          <input value={name} placeholder="Enter your name here" onChange={(event) => setName(event.target.value)}></input>
          <p>Welcome {name} </p>
        </div>
      </div>
    );
}

export default StateWithEffect;
