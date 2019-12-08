import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import App from './App';
import Home from './Pages/Home';
import Login from './Pages/Login';
import UserProfile from './Pages/UserProfile';
import NotFoundPage from './Pages/NotFoundPage.js';

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth, // how to get the user state
  predicate: auth => auth.isAuthenticated, // function to run against the auth state to determine if authenticated
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
});

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    <Route path="courses" component={UserIsAuthenticated(Courses)} />
    <Route path="profile" component={UserIsAuthenticated(UserProfile)} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
