import { produce } from 'immer';
const INITIAL_STATE = {
  amount: null,
}

export default function storage(state = INITIAL_STATE, action) {
  return produce(state, draft => {

    switch(action.type) {
      case '@storage/SET_STORAGE': {
        // console.log('reducer',action.payload);
        draft.amount = action.payload.storage.toFixed(2);
        break;
      }
      default:
    }
  });
  
}