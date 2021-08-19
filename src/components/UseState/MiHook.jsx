import React, { useState } from 'react';

const MoHook = () => {
  const [contrador, setContador] = useState(10);
  const [saludo] = useState('Hola desde el useState');

  return (
    <div>
      <h5>Mi Hook</h5>
      <button
        onClick={() => setContador(contrador + 1)}
        className='btn btn-warning'
      >
        Incrementar el contador
      </button>
      <p>
        El contador es: <strong>{contrador}</strong>
      </p>

      <p>{saludo}</p>
    </div>
  );
};

export default MoHook;
