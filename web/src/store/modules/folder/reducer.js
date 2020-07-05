import produce from 'immer';

const INITIAL_STATE = {
  folder_id: 0,
}

export default function setFolderId(state = INITIAL_STATE, action) {
  return produce(state, (draft)=> {
    switch( action.type ) {
      case '@folder/SET_CURRENT_FOLDER' : {
        draft.folder_id = action.payload.folder_id;
      }
    }
  });
}

