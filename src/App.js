import React from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';
import { history } from './_utils/history';
import Notfound from './notfound';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Courses from './Pages/Courses';
import Calendar from './Pages/Calendar';
import UserProfile from './Pages/UserProfile';
import CourseInfo from './components/CourseArea/CourseInfo';

const App = () => {
  return (
    <Router history={history}>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/courses/:courseId" component={CourseInfo} />
        <Route exact path="/calendar" component={Calendar} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
};

export default App;
