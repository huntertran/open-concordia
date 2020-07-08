import './App.css';

import React from 'react';
import Dashboard from "./components/Dashboard";
import Api from './context/api';
import Login from './pages/Login';

function App() {
  const existed = Api.isCredentialExisted();
  if (existed) {
    return (
      <Dashboard />
    )
  } else {
    return (
      <Login />
    )
  }
}

export default App;