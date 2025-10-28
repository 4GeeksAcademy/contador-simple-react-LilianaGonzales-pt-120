import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import { SecondsCounter } from './components/SecondsCounter';
import Proptypes from 'prop-types';


SecondsCounter.prototype = {
  cuartoDigito: Proptypes.number,
  tercerDigito: Proptypes.number,
  segundoDigito: Proptypes.number,
  primerDigito: Proptypes.number,
}
let counter = 0;

setInterval(() => {
  const cuarto = Math.floor(counter/1000);
  const tercero = Math.floor(counter/100);
  const segundo = Math.floor(counter/10);
  const primero = Math.floor(counter/1);
  console.log(primero,segundo,tercero,cuarto);
  
  counter ++;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <SecondsCounter primerDigito={primero} segundoDigito={segundo} tercerDigito={tercero} cuartoDigito={cuarto}/>
    </React.StrictMode>,
  )
}, 1000);



