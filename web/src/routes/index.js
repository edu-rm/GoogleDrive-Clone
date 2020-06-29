import React from 'react';

import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route path='/' exact component={Home} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/dashboard' isPrivate component={Dashboard}  />
      </Switch>
    </BrowserRouter>
  );
}