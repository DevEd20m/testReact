import React from 'react';

const ComponenteHijo = () => {
  return (
    <div>
      <p className='text-center'>
        <strong>Soy el componente Hijo {console.log('ejecutandome')}</strong>
      </p>
    </div>
  );
};

export default ComponenteHijo;
