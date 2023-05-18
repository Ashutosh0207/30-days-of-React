import React from 'react';
import './App.css';
import Msg from './components/Msg';
import Inputs from './components/Inputs';

function App() {
  return (
    <>
      <h2 className='txt'>Subscribe</h2>
      <Msg />
      <Inputs />
      <button className='btn'>Subscribe</button>
    </>
  );
}

export default App;
