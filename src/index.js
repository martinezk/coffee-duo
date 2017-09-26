import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configure-store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);

registerServiceWorker();
