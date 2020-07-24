export function setStorage(storage) {
  return {
    type: '@storage/SET_STORAGE',
    payload: {
      storage,
    }
  }
} 

export function setStoragePlus(storage) {
  return {
    type: '@storage/SET_STORAGE_PLUS',
    payload: {
      storage,
    }
  }
} 


