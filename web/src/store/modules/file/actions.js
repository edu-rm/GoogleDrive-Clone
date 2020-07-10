export function setUploadProgress(id, progress) {
  return {
    type: '@file/SET_PROGRESS',
    payload: {
      id, 
      progress
    }
  }
}


export function setFiles(data) {
  return {
    type: '@file/SET_UPLOAD_FILE',
    payload: {
      files: data,
    }
  }
}