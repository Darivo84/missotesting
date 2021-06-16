import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Site page components
import Home from './pages/Home';
import Consumers from './pages/Consumers';
import Business from './pages/Business';
import Developer from './pages/Developer';

// Authentication page components
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/consumers" component={Consumers} />
        <Route path="/business" component={Business} />
        <Route path="/developer" component={Developer} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
