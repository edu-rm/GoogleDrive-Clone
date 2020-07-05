import produce from 'immer';

const INITIAL_STATE = {
  folderContent: [],
  father: 1
}

export default function setFolderId(state = INITIAL_STATE, action) {
  return produce(state, (draft)=> {
    switch( action.type ) {
      case '@folder/SET_CURRENT_FOLDER' : {
        draft.folder_id = action.payload.folder_id;
      }
      case '@folder/SET_FOLDER_CONTENT_SUCCESS' : {
        draft.folderContent = action.payload.folders;
        draft.father = action.payload.father;
      }
    }
  });
}

