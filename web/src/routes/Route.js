import React from 'react';

import { Route as Router, Redirect } from 'react-router-dom';

import store from '../store';

function Route({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if(!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if(signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }


  return (
    <Router
    {...rest}
      render={(props) =>  <Component {...props} />}
    />
  );
}
export default Route;
