import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';

import { Container, Header, Files, ContextMenuStyle, Scroll, ContainerDrag } from './styles';


import { 
  setContentCurrentFolderRequest, 
  setNextFolder, 
  deleteFolderRequest,
} from '../../store/modules/folder/actions';

import {
  setFilesUpload,
  setFileExists,
  getFilesIntoFolderRequest
} from '../../store/modules/file/actions';

import { AiOutlineFile, AiFillCheckCircle } from 'react-icons/ai';

import { 
  MdDelete, 
  MdGetApp, 
  MdFolder,
  MdArrowBack,
  MdCreateNewFolder
} from 'react-icons/md';


export default function FileArea({ showModal }) {
  /* FLOW CONTROL */
  const dispatch = useDispatch();
  /* FOLDERS */
  const currentFolderContent = useSelector(state => state.folder.folderContent);
  const currentFolderFiles = useSelector(state => state.file.filesAlreadyExists);

  const rootFolder = useSelector(state => state.folder.rootFolder);
  const currentFolder = useSelector(state => state.folder.currentFolder);
  const father = useSelector(state => state.folder.father);
  const nextFolder = useSelector(state => state.folder.nextFolder);
  // const files = useSelector(state => state.file.fileProgress);


  // const [nextFolder, setNextFolder] = useState(0);

  const [folderActive, setFolderActive] = useState(0);
  const [fileActive, setFileActive] = useState(0);

  /*For Context */
  const [contextMenu, setContextMenu] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  /*FILES */

  useEffect(()=>{
    dispatch(getFilesIntoFolderRequest(currentFolder));
  },[currentFolder, dispatch]);

  /* ROOT FOLDER */
  useEffect(()=>{
    setFolderActive(0);
    dispatch(setContentCurrentFolderRequest(rootFolder));
  }, []);
  
  /* NEXT FOLDER */  
  useEffect(()=>{
    if(folderActive && folderActive !== 0 && nextFolder !== 0) {
      setFolderActive(0);
      dispatch(setContentCurrentFolderRequest(nextFolder));
    }
  },[nextFolder])


  /* BACK FOLDER */
  function handleBackFolder(){
      if(father) {
        dispatch(setContentCurrentFolderRequest(father));
        // dispatch(setCurrentFolder(father));
        dispatch(setNextFolder(0));

        setFolderActive(0);
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
    if(folderActive === id) {
      dispatch(setNextFolder(id));
      // setNextFolder(id);
    }else {
      setFolderActive(id);
    }
  }

  function handleDeleteFolder() {
    if(folderActive !== 0) {
      dispatch(deleteFolderRequest(folderActive));
      setFolderActive(0);
    }
  }

  function handleClickInFile (id,url) {
    if(fileActive === id) {
      window.open(url, "_blank") 
    }else {
      setFileActive(id);
    }
  }
  
  const onDrop = useCallback((acceptedFiles) => {
    dispatch(setFilesUpload(acceptedFiles));
    dispatch(setFileExists(true));
  }, [dispatch])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});



  return (
    <Container>
      <Header>
        <button onClick={handleBackFolder}>
          <MdArrowBack size={24}/>
        </button>
        <h1>Armazenamento</h1>
        <ul>
          <li id={folderActive !== 0 ? 'visible' : 'invisible'}>
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
            <Scroll>
              {currentFolderContent.length > 0
              && 
              currentFolderContent.map(folder => folder && (
                <div 
                  key={folder.id} 
                  className="row"
                  onClick={()=>handleDoubleClick(folder.id)}
                  id={folderActive === folder.id ? 'active' : 'normal'}
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
              {currentFolderFiles
              &&
              currentFolderFiles.map(file => file && (
                <div 
                  key={file.id} 
                  className="row"
                  onClick={()=>handleClickInFile(file.id, file.url)}
                  id={fileActive === Number(file.id) ? 'active' : 'normal'}
                >
                  <div id="name">
                    <AiOutlineFile size={24} />
                    {file.name}
                  </div>
                  <div id="owner">Eu</div>
                  <div id="createdAt">{file.createdAt}</div>
                  <div id="size">{file.size} mb</div>
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
