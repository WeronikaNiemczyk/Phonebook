import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
