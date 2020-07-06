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

export function setCurrentFolder(id) {
  // console.log(folders);
  return {
    type: '@folder/SET_CURRENT_FOLDER',
    payload: {
      id,
    }
  }
}

export function setFatherFolder(id) {
  // console.log(folders);
  return {
    type: '@folder/SET_FATHER_FOLDER',
    payload: {
      id,
    }
  }
}

// export function setPrevFolder(id) {
//   // console.log(folders);
//   return {
//     type: '@folder/SET_PREV_FOLDER',
//     payload: {
//       id,
//     }
//   }
// }

export function setNextFolder(id) {
  // console.log(folders);
  return {
    type: '@folder/SET_NEXT_FOLDER',
    payload: {
      id,
    }
  }
}


