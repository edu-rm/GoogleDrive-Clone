import produce from 'immer';
import { modify } from './utils/modify';

const INITIAL_STATE = {
  fileProgress: {
    // 1: {  
    //   id: 1,
    //   file,
    //   progress: 0,
    // },
  }
}

export default function file(state = INITIAL_STATE, action){
  console.log(action.payload);
  switch(action.type){
    case '@file/SET_UPLOAD_FILE' : {
      return {
        ...state,
        fileProgress : {
          ...state.fileProgress,
          ...modify(state.fileProgress, action.payload),
        }
      }
    }
    default:
      return state;
  }
}