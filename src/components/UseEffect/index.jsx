import { useState } from 'react';
import MiHook from './MiHook';
import MouseHover from './MouseHover';
import Api from './Api';

const Principal = () => {
  const [mostrart, setMostrar] = useState(true);
  return (
    <div className='container text-center'>
      <h4>Hook UseEffect</h4>
      <div className='row'>
        <div className='col-12 alert alert-primary'>
          <MiHook />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 alert alert-primary'>
          {mostrart && <MouseHover />}
          <button className='btn btn-warning' onClick={() => setMostrar(false)}>
            Desmontar componente hover
          </button>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 alert alert-primary'>
          <Api />
        </div>
      </div>
    </div>
  );
};

export default Principal;
