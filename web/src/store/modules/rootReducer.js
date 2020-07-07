import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import auth from './auth/reducer';
import folder from './folder/reducer';
import file from './file/reducer';


export default combineReducers({
  auth,
  folder,
  file
});
