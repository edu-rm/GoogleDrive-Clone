import produce from 'immer';

const INITIAL_STATE = {
  folderContent: [],
  father: 1,
}

export default function setFolderId(state = INITIAL_STATE, action) {
  return produce(state, (draft)=> {
    switch( action.type ) {
      case '@folder/SET_FOLDER_CONTENT_SUCCESS' : {
        draft.folderContent = action.payload.folderContent;
        draft.father = action.payload.father;
      }
      case '@folder/CREATE_SUCCESS' : {
        draft.folderContent.push(action.payload.folder);
      }
    }
  });
}

