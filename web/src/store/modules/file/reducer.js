import produce from 'immer';
import { modify } from './utils/modify';

const INITIAL_STATE = {
  files: []
}

export default function file(state = INITIAL_STATE, action){

  return produce(state, draft => {
    
    switch(action.type) {
      case '@file/SET_UPLOAD_FILE' : {
          console.log(action.payload.files)
          draft.files = action.payload.files;
          break;
      }

      case '@file/SET_PROGRESS' : {   
        break;
      }

      default:

    }
  })
}