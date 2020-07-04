import React from 'react';
import { Provider } from 'react-redux';
import { Router, BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import store from './store';

import GlobalStyles from './styles/global';

function App() {
  return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
        </Router>
      </Provider>

  );
}

export default App;
