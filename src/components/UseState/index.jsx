import React from 'react';
import AddList from './AddLists';
import MiHook from './MiHook';
import PreviousState from './PreviousState';

const Principal = () => {
  return (
    <div className='container text-center'>
      <h4>Hooke UseState</h4>
      <div className='row'>
        <div className='col-12 alert alert-primary'>
          <MiHook />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 alert alert-primary'>
          <PreviousState />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 alert alert-primary'>
          <AddList />
        </div>
      </div>
    </div>
  );
};

export default Principal;
