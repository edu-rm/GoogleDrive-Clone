import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { getFilesIntoFolderSuccess, deleteFileSuccess } from './actions';

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

export function* fileDelete({ payload }) {
  const { id } = payload;
  console.log('sagas', id)
  try {
    yield call(api.delete, 'files', {
      params: {
        file_id: id,
      }
    })

    yield put(deleteFileSuccess(id));

  }catch(e) {
    console.log(e);
  }

}

export default all([
  takeLatest('@file/GET_FILES_INTO_FOLDER_REQUEST', filesInFolder),
  takeLatest('@file/DELETE_REQUEST', fileDelete),

]);