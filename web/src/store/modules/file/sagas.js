import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { getFilesIntoFolderSuccess, deleteFileSuccess } from './actions';

import { setStorage } from '../storage/actions';

export function* filesInFolder({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, 'files', {
      params: {
        folder_id: id,
      }
    })
    const storage = yield call(api.get, 'storage');
    yield put(setStorage(storage.data.storage));

    yield put(getFilesIntoFolderSuccess(response.data));

  }catch(e){
    console.log(e);
  }
}

export function* fileDelete({ payload }) {
  const { id } = payload;
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

// export function fileUpload({ payload }){
//   const 
// }

export default all([
  takeLatest('@file/GET_FILES_INTO_FOLDER_REQUEST', filesInFolder),
  takeLatest('@file/DELETE_REQUEST', fileDelete),
]);