import React, { useEffect, useState } from 'react';

const ApiComponent = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    consumirApi();
  }, []);

  const consumirApi = async () => {
    console.log('vamos a consumir un API');

    try {
      const urlApi = 'https://jsonplaceholder.typicode.com/posts';

      const listaStorage = sessionStorage.getItem('lista');

      if (listaStorage) {
        setLista(JSON.parse(listaStorage));
        console.log('No llamamos a la API');
      } else {
        const resultado = await fetch(urlApi);
        const info = await resultado.json();
        console.log('mira la info');
        console.log(info);
        setLista(info);
        sessionStorage.setItem('lista', JSON.stringify(info));
        console.log('llamamos a la API');
      }
    } catch (error) {
      console.log('hubo un error');
    }
  };

  return (
    <div>
      <h2>LLamamos a un api gratuita</h2>
      <u>
        {lista.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </u>
    </div>
  );
};

export default ApiComponent;
