import React, { useState, useEffect } from 'react';

const MiHookUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Fase de Montaje');
    // componentDidMount
    // document.title = `click ${count}`;
  }, []);

  useEffect(() => {
    console.log('Fase de Actualización');
    document.title = `click ${count}`;
  }, [count]);

  return (
    <div>
      <p>el contador es: {count}</p>
      <button onClick={() => setCount(count + 1)} className='btn btn-primary'>
        incrementar con hook
      </button>
    </div>
  );
};

export default MiHookUseEffect;
