import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import folder from './folder/sagas';


export default function* rootSaga(){
  return yield all([
    auth,
    folder
  ]);
}
