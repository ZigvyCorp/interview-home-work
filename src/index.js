import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configStore from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = configStore();

ReactDOM.render(
	<Provider store={store}>

			<App />

    </Provider>,
document.getElementById('root')
);

serviceWorker.unregister();
