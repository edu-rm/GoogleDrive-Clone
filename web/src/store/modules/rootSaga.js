import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import folder from './folder/sagas';
import file from './file/sagas';

export default function* rootSaga(){
  return yield all([
    auth,
    folder,
    file
  ]);
}
