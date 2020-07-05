import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';
import history from '../services/history';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { BrowserRouter } from 'react-router-dom';

const middlewareRouter = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, middlewareRouter));

// createStore()
sagaMiddleware.run(rootSaga);

export default store;
