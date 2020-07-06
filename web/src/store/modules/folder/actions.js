export function setContentCurrentFolderRequest(id) {
  return {
    type: '@folder/SET_FOLDER_CONTENT_REQUEST',
    payload: {
      id,
    }
  }
}

export function setContentCurrentFolderSuccess(folders) {
  // console.log(folders);
  return {
    type: '@folder/SET_FOLDER_CONTENT_SUCCESS',
    payload: {
      folderContent : folders,
    }
  }
}

export function createFolderRequest(name, current, rootFolder) {
  return {
    type: '@folder/CREATE_REQUEST',
    payload: {
      name,
      current,
      rootFolder
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
  return {
    type: '@folder/SET_ROOT_FOLDER',
    payload: {
      id,
    }
  }
}

export function setCurrentFolder(id) {
  return {
    type: '@folder/SET_CURRENT_FOLDER',
    payload: {
      id,
    }
  }
}

export function setFatherFolder(id) {
  return {
    type: '@folder/SET_FATHER_FOLDER',
    payload: {
      id,
    }
  }
}

export function setNextFolder(id) {
  return {
    type: '@folder/SET_NEXT_FOLDER',
    payload: {
      id,
    }
  }
}


