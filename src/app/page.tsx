import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/login';
import Register from './pages/register';

const App: React.FC = () => {

  return (
    <Login/>
  );
};

export default App;