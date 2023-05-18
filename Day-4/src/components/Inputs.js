import React from 'react';
import './Inputs.css';

function Inputs() {
  return (
    <div className='Inp_txt'>
      <input type="text" placeholder='First Name'/>
      <input type="text" placeholder='Last Name'/>
      <input type="text" placeholder='E-mail'/>
    </div>
  );
}

export default Inputs;
