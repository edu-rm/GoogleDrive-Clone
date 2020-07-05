import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { setContentCurrentFolderSuccess } from './actions';

export function* folderContent({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `folders/${id}`);

    yield put(setContentCurrentFolderSuccess(response.data.childrenFolders, response.data.father || 1));

  } catch(e) {
    console.log(e);
  }
}

export default all([
  takeLatest('@folder/SET_FOLDER_CONTENT_REQUEST', folderContent),
]);