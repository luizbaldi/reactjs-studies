import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var baseUrl = 'http://pokeapi.co/api/v2/pokemon';
ReactDOM.render(
	<App baseUrl={baseUrl} />,
	document.getElementById('root')
);
registerServiceWorker();
