import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';

function tick() {
  const dateTime = (
    <div>
       <h2 className = 'f2 tc'> {new Date().toLocaleTimeString()}. </h2>
    </div>
  );


ReactDOM.render( 
  <React.StrictMode>
    { dateTime }
    <App />
    
    
  </React.StrictMode>,
  document.getElementById('root')
);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
setInterval(tick, 1000);
