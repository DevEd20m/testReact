import React, { useState } from 'react';

const intialState = 0;

const PreviousState = () => {
  const [count, setCount] = useState(intialState);

  const handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div>
      <p>contador: {count}</p>
      <button onClick={() => setCount(count + 1)} className='btn btn-primary'>
        Incrementar en 1
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className='btn btn-danger mx-5'
      >
        Decrementar en 1
      </button>
      <button onClick={handleClick} className='btn btn-warning'>
        Incrementar en 5
      </button>
      <button
        onClick={() => setCount(intialState)}
        className='btn btn-info mx-5'
      >
        Resetear
      </button>
    </div>
  );
};

export default PreviousState;
