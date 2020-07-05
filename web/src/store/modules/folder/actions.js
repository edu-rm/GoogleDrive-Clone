export function setContentCurrentFolderRequest(id) {
  return {
    type: '@folder/SET_FOLDER_CONTENT_REQUEST',
    payload: {
      id,
    }
  }
}

export function setContentCurrentFolderSuccess(folders, father) {
  // console.log(folders);
  return {
    type: '@folder/SET_FOLDER_CONTENT_SUCCESS',
    payload: {
      folderContent : folders,
      father
    }
  }
}

export function createFolderRequest(name, father) {
  return {
    type: '@folder/CREATE_REQUEST',
    payload: {
      name,
      father,
    },
  }
}

export function createFolderSuccess(folder) {
  return {
    type: '@folder/CREATE_SUCCESS',
    payload: {
      folder
    },
  }
}

export function setRootFolder(id) {
  // console.log(folders);
  return {
    type: '@folder/SET_ROOT_FOLDER',
    payload: {
      id,
    }
  }
}
