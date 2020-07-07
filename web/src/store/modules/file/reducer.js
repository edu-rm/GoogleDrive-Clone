import produce from 'immer';

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
  switch(action.type){
    case 'x' : {

      break;
    }
    default:
      return state;
  }
}