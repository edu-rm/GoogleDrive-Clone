export function setStorage(storage) {
  return {
    type: '@storage/SET_STORAGE',
    payload: {
      storage,
    }
  }
} ;