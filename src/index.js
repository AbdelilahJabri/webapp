import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from "./redux/store";
import {ToastContainer} from "react-toastify";
import "react-toggle/style.css"
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <Provider store={store}>
        <App/>
        <ToastContainer/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
