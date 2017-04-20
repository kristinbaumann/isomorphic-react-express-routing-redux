import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from '../shared/routes';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from '../shared/redux/reducer';

const initialState = window.__APP_INITIAL_STATE__;

const store = createStore(counterApp, initialState);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
     </Provider>, 
    document.getElementById('mount')
);
