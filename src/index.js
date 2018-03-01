import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {getHeadlines} from './actions';

ReactDOM.render( 
	<App getHeadlines={getHeadlines}/>,
	document.getElementById('root')
);

registerServiceWorker();