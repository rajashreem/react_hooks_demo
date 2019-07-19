import React, { useState, useEffect } from 'react';

function StateWithEffect() {
    const [count, setCount] = useState(0); 

    useEffect(() => {
      document.title = `${count} times`;
    })

    return(
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => {setCount(count+1)}}>Click me to increase count</button>
        <button onClick={() => {setCount(count-1)}}>Click me to decrease count</button>
      </div>
    );
}

export default StateWithEffect;
