import React from 'react';
import './App.css';
import ColorBand from './components/ColorBand';

function App() {
  return (
    <div className='ColorGroup'>
      <ColorBand color="#518cef">#518cef</ColorBand>
      <ColorBand color="#3b10c4">#3b10c4</ColorBand>
      <ColorBand color="#9aede6">#9aede6</ColorBand>
      <ColorBand color="#8ee763">#8ee763</ColorBand>
      <ColorBand color="#a30dd0">#a30dd0</ColorBand>
    </div>
  );
}

export default App;
