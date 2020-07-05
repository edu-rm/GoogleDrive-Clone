import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';
import { setRootFolder } from '../folder/actions';

import history from '../../../services/history';

// import { useHistory } from 'react-router-dom';



export function* signIn({ payload }) {

  // const history = useHistory();


  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password
    });

    const { token, user } = response.data;

    api.defaults.headers.authorization= `Bearer ${token}`;

    console.log(api.defaults.headers.authorization);
    console.log(response.data.folder)
    yield put(signInSuccess(token, user));
    yield put(setRootFolder(response.data.folder));


  }catch(e){
    yield put(signFailure());
    history.push('/');
  }

  history.push('/dashboard');

}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
]);