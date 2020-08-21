import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import autentica from './autentica';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      autentica.estaAutenticado ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default PrivateRoute;
