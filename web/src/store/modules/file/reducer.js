import produce from 'immer';
import { modify } from './utils/modify';
// import { toArray } from 'lodash';

const INITIAL_STATE = {
  files: {},
  isUploading: [],
  progress: null,
  fileExists: false,
}

export default function file(state = INITIAL_STATE, action){

  return produce(state, draft => {
    
    switch(action.type) {
      case '@file/SET_UPLOAD_FILE' : {
        
        draft.files = modify(draft.files, action.payload.files)
        console.log(draft.files);
        break;
      }

      case '@file/SET_PROGRESS' : {
        // console.log(action.payload.progress);
        console.log(draft.files[action.payload.id])
        draft.files = {
          ...draft.files,
          [action.payload.id] : {
            ...draft.files[action.payload.id],
            progress: action.payload.progress
          }
        }
        break;
      }

      case '@file/SET_UPLOAD_FILE_SUCCESS' : {
        draft.isUploading = []
        break;
      }

      case '@file/FILE_EXISTS' : {
        draft.fileExists = action.payload.exists;
        break;
      }

      default:

    }
  })
}