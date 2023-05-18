import React from 'react';
import './ColorBand.css';

function ColorBand(props) {
  return (
    <div className="colors" style={{backgroundColor: props.color}}>
      <p>{props.children}</p>
    </div>
  );
}

export default ColorBand;
