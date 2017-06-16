import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var baseUrl = 'http://pokeapi.co/api/v2/pokemon/';
ReactDOM.render(
	<App baseUrl={baseUrl} />,
	document.getElementById('root')
);
registerServiceWorker();
