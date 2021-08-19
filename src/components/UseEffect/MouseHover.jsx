import React, { useEffect, useState } from 'react';

const MouseHover = () => {
  const [coordenadas, setCoordenadas] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('mousemove', setMousePosition);
    return () => {
      window.removeEventListener('mousemove', setMousePosition);
    };
  }, []);


  const setMousePosition = (e) => {
    console.log('ejecutando');
    setCoordenadas({ x: e.clientX, y: e.clientY });
  };

  return (
    <div>
      <p>
        {' '}
        X = {coordenadas.x}; Y = {coordenadas.y}
      </p>
    </div>
  );
};

export default MouseHover;
