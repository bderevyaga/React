import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router, Route } from 'react-router';

const element = document.getElementById('root');

ReactDOM.render(<App />, element);
registerServiceWorker();
