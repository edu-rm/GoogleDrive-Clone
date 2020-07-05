import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import auth from './auth/reducer';
import folder from './folder/reducer';

export default combineReducers({
  auth,
  folder
});
