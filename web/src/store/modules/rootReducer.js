import { combineReducers } from 'redux';

import auth from './auth/reducer';
import folder from './folder/reducer';
import file from './file/reducer';
import storage from './storage/reducer';



export default combineReducers({
  auth,
  folder,
  file,
  storage
});
