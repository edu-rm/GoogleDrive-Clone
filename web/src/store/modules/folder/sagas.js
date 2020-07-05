import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { setContentCurrentFolderSuccess, createFolderSuccess } from './actions';

export function* folderContent({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `folders/${id}`);
    const folders = [ ...response.data.childrenFolders];

    // console.log(folders);

    yield put(setContentCurrentFolderSuccess(folders, response.data.father));

  } catch(e) {
    console.log(e);
  }
}

export function* createFolder({ payload }) {
  try {
    const { name, father } = payload;
    const response = yield call(api.post, 'folders', {
      name,
      father
    });

    yield put(createFolderSuccess(response.data));

  }catch (e) {
    console.log(e);
  }
}

export default all([
  takeLatest('@folder/SET_FOLDER_CONTENT_REQUEST', folderContent),
  takeLatest('@folder/CREATE_REQUEST', createFolder)
]);