import produce from 'immer';
import { modify } from './utils/modify';
// import { toArray } from 'lodash';

const INITIAL_STATE = {
  filesAlreadyExists: [],
  files: {},
  isUploading: [],
  progress: null,
  fileExists: false,
}

export default function file(state = INITIAL_STATE, action){

  return produce(state, draft => {
    
    switch(action.type) {
      case '@file/SET_UPLOAD_FILE' : {
        console.log(draft.files)
        draft.files = modify(draft.files, action.payload.files)
        break;
      }

      case '@file/SET_PROGRESS' : {
        if(action.payload.progress === 100) {
          // draft.filesAlreadyExists.push(draft.files[action.payload.id]);
        }
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

      case '@file/GET_FILES_INTO_FOLDER_SUCCESS' : {
          const files = action.payload.files.map(file=> {
            return {
              ...file,
              size: Number(file.size * 0.000001).toFixed(3),
            }
          })
        draft.filesAlreadyExists = files;
        break;
      }

      case '@file/DELETE_SUCCESS' : {
        draft.filesAlreadyExists = draft.filesAlreadyExists.filter(file => file.id !== action.payload.id);
        break;
      }

      default:

    }
  })
}