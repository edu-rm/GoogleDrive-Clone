import produce from 'immer';
import { modify } from './utils/modify';

const INITIAL_STATE = {
  files: [],
  isUploading: []
}

export default function file(state = INITIAL_STATE, action){

  return produce(state, draft => {
    
    switch(action.type) {
      case '@file/SET_UPLOAD_FILE' : {
          draft.files = action.payload.files;
          draft.isUploading = action.payload.files;
          break;
      }

      case '@file/SET_PROGRESS' : {   
        break;
      }

      default:

    }
  })
}