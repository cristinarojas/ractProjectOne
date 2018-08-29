import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// registerServiceWorker - aunque se vaya la conexion los datos siguen descargados...guarda de manera temporal los archivos.
