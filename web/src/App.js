import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
