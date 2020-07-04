import React, { useState, useCallback, useEffect } from 'react';
// import {useDropzone} from 'react-dropzone'

import api from '../../services/api';

import {useDropzone} from 'react-dropzone'
import { MdDelete, MdViewHeadline, MdGetApp, MdFolder } from 'react-icons/md';

import { Container, Header, Files, ContextMenuStyle, Scroll, ContainerDrag } from './styles';

function FileArea() {
  /* FOLDERS */

  const [folders, setFolders] = useState([]);
  const [itemActive, setItemActive] = useState();

  /*For Context */
  const [contextMenu, setContextMenu] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [selected, seSelected] = useState([]);

  useEffect(()=>{
    async function requestItems() {
      try {
        const response = await api.get('folders/1');
        setFolders(response.data);
      } catch (e) {
        console.log(e);
      }
    }

    requestItems();

  }, []);

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

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      console.log(file);
    })
    

  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <Container>
      <Header>
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
            {folders 
              && 
              folders.map(folder => (
                <div 
                  key={folder.id} 
                  className="row"
                  onClick={()=>setItemActive(folder)}
                  id={itemActive === folder ? 'active' : 'normal'}
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