import React, { useState } from 'react';

const usuarioInicial = { nombre: '', apellido: '' };

const AddList = () => {
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaUsuarios([...listaUsuarios, usuario]);
    setUsuario(usuarioInicial);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='nombre' className='form-label'>
            Nombre
          </label>
          <input
            type='text'
            className='form-control'
            name='nombre'
            value={usuario.nombre}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='apellido' className='form-label'>
            Apellido
          </label>
          <input
            type='text'
            name='apellido'
            className='form-control'
            value={usuario.apellido}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Agregar
        </button>
      </form>
      <section className='mt-5'>
        {listaUsuarios.map((usuario, index) => (
          <p key={index}>
            {usuario.nombre} - {usuario.apellido}
          </p>
        ))}
      </section>
    </div>
  );
};

export default AddList;
