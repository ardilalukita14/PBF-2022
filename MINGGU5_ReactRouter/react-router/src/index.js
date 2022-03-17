import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import URLParameters from './PRAKTIKUM/URLParameters';
import UseNestingRouter from './PRAKTIKUM/UseNestingRouter';
import UseRedirects from './PRAKTIKUM/UseRedirects';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <URLParameters />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <UseNestingRouter />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <UseRedirects />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
