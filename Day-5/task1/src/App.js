import React from 'react';
import Bar from './components/bar';
import './App.css';
import HTML from "./img/HTML.png"
import CSS from "./img/CSS.png"
import JS from "./img/JS.png"
import REACT from "./img/REACT.png"

function App() {
  return (
    <>
      <h2 className='txt'>Front End Technoogies</h2>
      <div className='images'>
        <Bar image={HTML} />
        <Bar image={CSS} />
        <Bar image={JS} />
        <Bar image={REACT} />
      </div>
    </>
  );
}

export default App;
