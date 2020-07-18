import { produce } from 'immer';
const INITIAL_STATE = {
  storage: null,
}

export default function storage(state = INITIAL_STATE, action) {
  return produce(state, draft => {

    switch(action.type) {
      case '@storage/SET_STORAGE': {
        console.log('action', action.payload.storage)
        draft.storage = action.payload.storage && Number(action.payload.storage).toFixed(2);
        break;
      }
      default:
    }
  });
  
}