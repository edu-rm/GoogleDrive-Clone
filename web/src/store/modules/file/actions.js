export function setUploadProgress(id, progress) {
  return {
    type: '@file/SET_PROGRESS',
    payload: {
      id,
      progress
    }
  }
}

export function setFileExists(exists) {
  return {
    type: '@file/FILE_EXISTS',
    payload: {
      exists,
    }
  }
}


export function setFilesUpload(data) {
  return {
    type: '@file/SET_UPLOAD_FILE',
    payload: {
      files: data,
    }
  }
}

export function setFileUploadSuccess() {
  return {
    type: '@file/SET_UPLOAD_FILE_SUCCESS',
  }
}