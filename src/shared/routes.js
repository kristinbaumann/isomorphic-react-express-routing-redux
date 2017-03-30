import React from 'react';
import { Route, Router } from 'react-router';

import App from './components/App';
import CounterA from './components/CounterA';
import CounterB from './components/CounterB';

const routes = (
    <Router>
        <Route path='/' component={App} />
        <Route path='/counterA' component={CounterA} />
        <Route path='/counterB' component={CounterB} />
    </Router>
);

export default routes;  