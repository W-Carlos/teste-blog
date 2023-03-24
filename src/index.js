import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/globalStyles';
import Routes from './routes.js';


ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
