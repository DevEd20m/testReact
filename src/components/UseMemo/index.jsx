import React, { useMemo, useState } from 'react';
import ComponenteHijo from './ComponenteHijo';

const Principal = () => {
  const [count, setCount] = useState(0);
  const [estado, setEstado] = useState(true);

  const componenteMemorizado = useMemo(() => {
    return <ComponenteHijo />;
  }, [count]);

  return (
    <div className='container text-center'>
      <h4>Hook UseMemo</h4>
      <div>{componenteMemorizado}</div>
      <div className='row'>
        <div className='col 12 alert alert-primary'>
          <p>el contador es: {count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className='btn btn-primary'
          >
            aumentar en 1
          </button>
        </div>
      </div>
      <div>
        <div className='col 12 alert alert-primary'>
          <p>el estado es: {JSON.stringify(estado)}</p>
          <button
            onClick={() => setEstado(!estado)}
            className='btn btn-warning'
          >
            cambiar estado
          </button>
        </div>
      </div>
    </div>
  );
};

export default Principal;
