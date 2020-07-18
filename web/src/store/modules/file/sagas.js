import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { getFilesIntoFolderSuccess } from './actions';

export function* filesInFolder({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, 'files', {
      params: {
        folder_id: id,
      }
    })

    console.log(response.data);
    yield put(getFilesIntoFolderSuccess(response.data));

  }catch(e){
    console.log(e);
  }
}

export default all([
  takeLatest('@file/GET_FILES_INTO_FOLDER_REQUEST', filesInFolder)
]);