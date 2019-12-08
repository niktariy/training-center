import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { history } from './_utils/history';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Courses from './Pages/Courses';
import UserProfile from './Pages/UserProfile';

// import { PrivateRoute } from './_components/PrivateRoute';

const App = () => {
  return (
    <Router history={history}>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/courses" component={Courses} />
      </Switch>
    </Router>
  );
};

export default App;
