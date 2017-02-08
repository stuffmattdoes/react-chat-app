// Libraries
import React from 'react';
import { browserHistory, /* IndexRedirect, IndexRoute, */ Route, Router } from 'react-router';

// Components
import App from '../components/App';
import Login from '../components/Login';

// Stores
import ChannelStore from '../stores/ChannelStore';

function requireLogin() {
    if (!ChannelStore.getUser()) {
        // Redirect to /app
        // browserHistory.push('/login');
    }
}

const Routes = (
    <Router history={browserHistory} >
        <Route path='/app' component={App} onEnter={ requireLogin } />
        <Route path='/login' component={Login} />
    </Router>
);

export default Routes;