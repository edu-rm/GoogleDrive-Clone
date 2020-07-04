import React, { useState, useCallback, useEffect } from 'react';
// import {useDropzone} from 'react-dropzone'

import api from '../../services/api';

import {useDropzone} from 'react-dropzone'
import { 
  MdDelete, 
  MdViewHeadline, 
  MdGetApp, 
  MdFolder,
  MdArrowBack
} from 'react-icons/md';

import { Container, Header, Files, ContextMenuStyle, Scroll, ContainerDrag } from './styles';

function FileArea() {
  /* FLOW CONTROL */


  /* FOLDERS */
  const [currentFolderContent, setCurrentFolderContent] = useState([]);
  const [currentFolderId, setCurrentFolderId] = useState();

  const [nextFolder, setNextFolder] = useState([]);
  const [prevFolder, setPrevFolder] = useState(0);


  const [itemActive, setItemActive] = useState(0);

  /*For Context */
  const [contextMenu, setContextMenu] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);


  /* ROOT FOLDER */
  useEffect(()=>{
    async function requestItems() {
      try {
        const response = await api.get('folders/1');
        setCurrentFolderContent(response.data.childrenFolders);
        setCurrentFolderId(1);
        setPrevFolder(0);
      } catch (e) {
        console.log(e);
      }
    }

    requestItems();

  }, []);
  
  /* NEXT FOLDER */
  
  useEffect(()=>{
    console.log(itemActive);
    async function requestItems() {
      try {
        const response = await api.get(`folders/${nextFolder}`);
        setCurrentFolderId(nextFolder);
        setPrevFolder(response.data.father);
        
        setCurrentFolderContent(response.data.childrenFolders);

      } catch (e) {
        console.log(e);
      }
    }
    if(itemActive != 0) {
      setPrevFolder(currentFolderId);
      requestItems();
    }
  },[nextFolder])

  /* BACK FOLDER */

  async function handleBackFolder(){
    try {
      const response = await api.get(`folders/${prevFolder}`);
      setCurrentFolderContent(response.data.childrenFolders);

      setCurrentFolderId(prevFolder);
      setPrevFolder(response.data.father)
    } catch (e) {
      console.log(e);
    }
  }

  function handleClickContext(e) {
    e.preventDefault();
    setX(e.clientX);
    setY(e.clientY);

    console.log(e.clientX);
    console.log(e.clientY);

    setContextMenu(!contextMenu);
  }

  function handleClickOutContext(){
    setContextMenu(false);
  }

  function handleDoubleClick(id) {
    if(itemActive === id) {
      setNextFolder(id);
    }else {
      setItemActive(id)
    }
  }

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      console.log(file);
    })
    

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
          <li>
            <button>
              <MdDelete size={24} />
            </button>
          </li>
          <li>
            <button>
              <MdViewHeadline size={24} />
            </button>
          </li>
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
              currentFolderContent.map(folder => (
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
              item1
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

export default FileArea;