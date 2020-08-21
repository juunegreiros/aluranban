import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Board from '../pages/Board';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/boards" component={Board} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
