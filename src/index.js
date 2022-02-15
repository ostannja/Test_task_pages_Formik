import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import Routing from './Routing';

ReactDOM.render(
  <React.StrictMode>
    <Routing>
      <App />
    </Routing>
  </React.StrictMode>,
  document.getElementById('root')
)