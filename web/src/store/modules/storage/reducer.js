import { produce } from 'immer';
const INITIAL_STATE = {
  storage: null,
}

export default function storage(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch(action.type) {
      case '@storage/SET_STORAGE': {
        break;
      }
      default:
    }
  });
  
}