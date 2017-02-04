// Libraries
import React from 'react';
import { browserHistory, IndexRedirect, IndexRoute, Route, Router } from 'react-router';

// Components
import App from '../components/App';
import Login from '../components/Login';

const Routes = (
    <Router history={browserHistory} >
        <Route path='/app' component={App} />
        <Route path='/login' component={Login} />
    </Router>
);

export default Routes;