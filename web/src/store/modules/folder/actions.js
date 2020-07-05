export function setContentCurrentFolderRequest(id) {
  return {
    type: '@folder/SET_FOLDER_CONTENT_REQUEST',
    payload: {
      id,
    }
  }
}

export function setContentCurrentFolderSuccess(folders, father) {
  return {
    type: '@folder/SET_FOLDER_CONTENT_SUCCESS',
    payload: {
      folders,
      father
    }
  }
}
