import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Board from './pages/Board';

export const fakeAuth = {
  estaAutenticado: false,
  autenticar: function (user) {
    console.log(user);
    if (user === 'ju') {
      this.estaAutenticado = true;
    }
    setTimeout(user, 100);
  },
  deslogar: (user) => {
    this.estaAutenticado = false;
    setTimeout(user, 100);
  },
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      fakeAuth.estaAutenticado ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/boards" component={Board} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
