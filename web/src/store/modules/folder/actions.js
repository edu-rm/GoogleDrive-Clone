export function currentFolder(folder_id) {
  return {
    type: '@folder/SET_CURRENT_FOLDER',
    payload: {
      folder_id,
    }
  }
}