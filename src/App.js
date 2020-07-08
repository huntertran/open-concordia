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
      <Route path="/login" component={Login} />
      <Route path="/" exact={true} component={Login} />
    </Switch>
  )
}

export default App;