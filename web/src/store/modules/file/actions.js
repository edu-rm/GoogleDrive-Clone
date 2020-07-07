export function setUploadFile(data) {
  return {
    type: '@file/SET_UPLOAD_FILE',
    payload: data,
  }
}