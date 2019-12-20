import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Topbar from './components/Topbar'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Topbar />, document.getElementById('root'));

serviceWorker.unregister();
