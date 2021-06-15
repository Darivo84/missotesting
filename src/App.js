import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Consumers from './pages/Consumers';
import Business from './pages/Business';
import Developer from './pages/Developer';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/consumers" component={Consumers} />
        <Route path="/business" component={Business} />
        <Route path="/developer" component={Developer} />
      </Switch>
    </Router>
  );
};

export default App;
