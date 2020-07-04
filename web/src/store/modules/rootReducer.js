import { combineReducers } from 'redux';
import auth from './auth/reducer';
import folder from './folder/reducer';

export default combineReducers({
  auth,
  folder
});