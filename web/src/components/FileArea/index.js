import React, { useState, useCallback, useEffect } from 'react';

import { 
  setContentCurrentFolderRequest, 
  setNextFolder, 
  deleteFolderRequest,
} from '../../store/modules/folder/actions';

import api from '../../services/api';

import {
  setFiles,
  setUploadProgress
} from '../../store/modules/file/actions';

import { useDispatch, useSelector } from 'react-redux';

import {useDropzone} from 'react-dropzone'
import { 
  MdDelete, 
  MdViewHeadline, 
  MdGetApp, 
  MdFolder,
  MdArrowBack,
  MdCreateNewFolder
} from 'react-icons/md';

import { Container, Header, Files, ContextMenuStyle, Scroll, ContainerDrag } from './styles';

export default function FileArea({ showModal }) {
  /* FLOW CONTROL */
  const dispatch = useDispatch();
  /* FOLDERS */
  const currentFolderContent = useSelector(state => state.folder.folderContent);
  const rootFolder = useSelector(state => state.folder.rootFolder);
  const currentFolder = useSelector(state => state.folder.currentFolder);
  const father = useSelector(state => state.folder.father);
  const nextFolder = useSelector(state => state.folder.nextFolder);
  const files = useSelector(state => state.file.fileProgress);


  // const [nextFolder, setNextFolder] = useState(0);

  const [itemActive, setItemActive] = useState(0);

  /*For Context */
  const [contextMenu, setContextMenu] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  // useEffect(()=>{
  //   console.log(state);
  // })

  /* ROOT FOLDER */
  useEffect(()=>{
    setItemActive(0);
    dispatch(setContentCurrentFolderRequest(rootFolder));
  }, []);
  
  /* NEXT FOLDER */  
  useEffect(()=>{
    if(itemActive && itemActive !== 0 && nextFolder !== 0) {
      setItemActive(0);
      dispatch(setContentCurrentFolderRequest(nextFolder));
    }
  },[nextFolder])


  /* BACK FOLDER */
  function handleBackFolder(){
      if(father) {
        dispatch(setContentCurrentFolderRequest(father));
        // dispatch(setCurrentFolder(father));
        dispatch(setNextFolder(0));

        setItemActive(0);
      }
  }

  function handleClickContext(e) {
    e.preventDefault();
    setX(e.clientX);
    setY(e.clientY);
    setContextMenu(!contextMenu);
  }

  function handleClickOutContext(){
    setContextMenu(false);
  }

  function handleDoubleClick(id){
    if(itemActive === id) {
      dispatch(setNextFolder(id));
      // setNextFolder(id);
    }else {
      setItemActive(id);
    }
  }

  function handleDeleteFolder() {
    if(itemActive !== 0) {
      dispatch(deleteFolderRequest(itemActive));
      setItemActive(0);
    }
  }

  const onDrop = useCallback(async (acceptedFiles) => {
    dispatch(setFiles(acceptedFiles));
    const formPayload = new FormData();

    for(let i = 0 ; i < acceptedFiles.length; i++) {
      formPayload.append('files', acceptedFiles[i]);
    }



    try {
      await api.post('files', formPayload, {
        params: {
          folder_id: currentFolder,
        },
        onUploadProgress: progress => {
          const { loaded, total } = progress;
          const percentageProgress = Math.floor((loaded/total) * 100)
          console.log(percentageProgress);
        }
      });
    }catch(e) {
      console.log(e);
    }

  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <Container>
      <Header>
        <button onClick={handleBackFolder}>
          <MdArrowBack size={24}/>
        </button>
        <h1>Armazenamento</h1>
        <ul>
          <li id={itemActive !== 0 ? 'visible' : 'invisible'}>
            <button onClick={handleDeleteFolder}>
              <MdDelete size={24} />
            </button>
          </li>
          {/* <li>
            <button>
              <MdViewHeadline size={24} />
            </button>
          </li> */}
        </ul>
      </Header>
      <div className="dropzone">
      <ContainerDrag {...getRootProps()}>
        {isDragActive ?
          <div className="drop-area">
            <input {...getInputProps()} />
            <MdGetApp id="arrow-down" size={40} />
          </div>
          :
          <Files onContextMenu={handleClickContext} onClick={handleClickOutContext} display="grade">
            <div className="header">
              <p id="name">
                Nome
              </p>
              <p id="owner">Proprietário</p>
              <p id="createdAt">Criação</p>
              <p id="size">Tamanho</p>
            </div>
            <Scroll >
              {currentFolderContent 
              && 
              currentFolderContent.map(folder => folder && (
                <div 
                  key={folder.id} 
                  className="row"
                  onClick={()=>handleDoubleClick(folder.id)}
                  id={itemActive === folder.id ? 'active' : 'normal'}
                >
                  <div id="name">
                    <MdFolder size={24} />
                    {folder.name}
                  </div>
                  <div id="owner">Eu</div>
                  <div id="createdAt">{folder.createdAt}</div>
                  <div id="size">1mb</div>
                </div>
              ))
            }
          </Scroll>
        </Files>
        }
      </ContainerDrag>  
      </div>
      <ContextMenu show={contextMenu} x={x} y={y} />
    </Container>
  );
}

function ContextMenu({ show, x, y }) {
  return (
    <div className="menu">
      {show && 
        <ContextMenuStyle x={x} y={y} >
          <ul>
            <li>
              <button>
                <MdCreateNewFolder size={24} />
                Criar pasta
              </button>
            </li>
            <li>
              item2
            </li>
            <li>
              item3
            </li>
          </ul>
        </ContextMenuStyle>
      }
    </div> 
  );
}
