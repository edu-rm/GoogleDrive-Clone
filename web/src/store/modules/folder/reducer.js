import produce from 'immer';

const INITIAL_STATE = {
  folderContent: [],
  rootFolder: null,
  father: null,
  currentFolder : null,
  nextFolder: null,
  qualquer: 1,
}

export default function folder(state = INITIAL_STATE, action) {
  return produce(state, (draft)=> {
    switch( action.type ) {
      case '@folder/SET_FOLDER_CONTENT_SUCCESS' : {
        draft.folderContent = action.payload.folderContent;
        draft.father = action.payload.father
      }

      case '@folder/CREATE_SUCCESS' : {
        draft.folderContent.push(action.payload.folder);
      }

      case '@folder/SET_ROOT_FOLDER' : {
        draft.rootFolder = action.payload.id;
      }
      
      case '@folder/SET_CURRENT_FOLDER' : {
        draft.currentFolder = action.payload.id;
      }

      case '@folder/SET_NEXT_FOLDER' : {
        draft.nextFolder = action.payload.id ;
      }

      case '@folder/SET_FATHER_FOLDER' : {
        draft.father = action.payload.id ? action.payload.id : draft.rootFolder;
      }
      
    }
  });
}

