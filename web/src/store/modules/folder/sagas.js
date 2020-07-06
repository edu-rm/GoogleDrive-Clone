import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { setContentCurrentFolderSuccess, createFolderSuccess, setFatherFolder, setCurrentFolder } from './actions';

export function* folderContent({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, 'folders', {
      params: {
        id
      }
    });

    yield put(setContentCurrentFolderSuccess(response.data.childrenFolders));
    yield put(setCurrentFolder(id));
    if(response.data.father){
      yield put(setFatherFolder(response.data.father));
    }

  } catch(e) {
    console.log(e);
  }
}

export function* createFolder({ payload }) {
  try {
    const { name, current, rootFolder } = payload;

    // const root = rootFolder === current;

    const response = yield call(api.post, 'folders', {
      name,
      father: current,
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