import './App.css';

import React from 'react';
import Dashboard from "./components/Dashboard";
import Login from './pages/Login';

import { Route, Switch } from "react-router-dom";

import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Switch>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/:routeUsername?/:routeKey?" exact={true} component={Login} />
    </Switch>
  )
}

export default App;