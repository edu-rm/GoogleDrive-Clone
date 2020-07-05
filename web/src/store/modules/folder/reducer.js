import produce from 'immer';

const INITIAL_STATE = {
  folderContent: [],
  rootFolder: null,
  father: null,
}

export default function folder(state = INITIAL_STATE, action) {
  return produce(state, (draft)=> {
    switch( action.type ) {
      case '@folder/SET_FOLDER_CONTENT_SUCCESS' : {
        draft.folderContent = action.payload.folderContent;
        draft.father = action.payload.father;
      }
      case '@folder/CREATE_SUCCESS' : {
        draft.folderContent.push(action.payload.folder);
      }
      case '@folder/SET_ROOT_FOLDER' : {
        draft.rootFolder = action.payload.id;
        // draft.father = action.payload.id;
      }
    }
  });
}

