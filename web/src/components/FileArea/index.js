import React, { useState, useRef, useEffect } from 'react';
// import {useDropzone} from 'react-dropzone'
import DropZone from '../DropZone';

import { MdDelete, MdViewHeadline, MdFolder } from 'react-icons/md';

import { Container, Header, Files, ContextMenuStyle, Scroll } from './styles';

function FileArea() {
  const [contextMenu, setContextMenu] = useState(false);
  // const contextMenuRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    setX(e.clientX);
    setY(e.clientY);

    console.log(e.clientX);
    console.log(e.clientY);


    setContextMenu(!contextMenu);
  }

  function handleOutClick(e){
    setContextMenu(false);
    
    // console.log(e.parentNode);
    // console.log(contextMenuRef.current);
    // if(e.target != contextMenuRef.current){
    //   setContextMenu(false);
    // }
  }

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
        <DropZone /> 

        <Files onContextMenu={handleClick} onClick={handleOutClick} display="grade">
          <div className="header">
            <p id="name">
              Nome
            </p>
            <p id="owner">Proprietário</p>
            <p id="createdAt">Criação</p>
            <p id="size">Tamanho</p>
          </div>
          <Scroll>
          <div id="active" className="row">
              <div id="name">
                <MdFolder size={24} />
                Eduardo Rampon Meireles
              </div>
              <div id="owner">Eu</div>
              <div id="createdAt">14/09/2001</div>
              <div id="size">1mb</div>
          </div>
          <div className="row">
              <div id="name">
                <MdFolder size={24} />
                Eduardo Rampon Meireles
              </div>
              <div id="owner">Eu</div>
              <div id="createdAt">14/09/2001</div>
              <div id="size">1mb</div>
          </div>
          <div className="row">
              <div id="name">
                <MdFolder size={24} />
                Eduardo Rampon Meireles
              </div>
              <div id="owner">Eu</div>
              <div id="createdAt">14/09/2001</div>
              <div id="size">1mb</div>
          </div>
          <div className="row">
            <div id="name">
              <MdFolder size={24} />
              Eduardo Rampon Meireles
            </div>
            <div id="owner">Eu</div>
            <div id="createdAt">14/09/2001</div>
            <div id="size">1mb</div>
          </div>
          <div className="row">
            <div id="name">
              <MdFolder size={24} />
              Eduardo Rampon Meireles
            </div>
            <div id="owner">Eu</div>
            <div id="createdAt">14/09/2001</div>
            <div id="size">1mb</div>
          </div> 
          <div className="row">
            <div id="name">
              <MdFolder size={24} />
              Eduardo Rampon Meireles
            </div>
            <div id="owner">Eu</div>
            <div id="createdAt">14/09/2001</div>
            <div id="size">1mb</div>
          </div> 
          <div className="row">
            <div id="name">
              <MdFolder size={24} />
              Eduardo Rampon Meireles
            </div>
            <div id="owner">Eu</div>
            <div id="createdAt">14/09/2001</div>
            <div id="size">1mb</div>
          </div> 
          <div className="row">
            <div id="name">
              <MdFolder size={24} />
              Eduardo Rampon Meireles
            </div>
            <div id="owner">Eu</div>
            <div id="createdAt">14/09/2001</div>
            <div id="size">1mb</div>
          </div> 
          <div className="row">
            <div id="name">
              <MdFolder size={24} />
              Eduardo Rampon Meireles
            </div>
            <div id="owner">Eu</div>
            <div id="createdAt">14/09/2001</div>
            <div id="size">1mb</div>
          </div> 
          <div className="row">
            <div id="name">
              <MdFolder size={24} />
              Eduardo Rampon Meireles
            </div>
            <div id="owner">Eu</div>
            <div id="createdAt">14/09/2001</div>
            <div id="size">1mb</div>
          </div> 
          <div className="row">
            <div id="name">
              <MdFolder size={24} />
              Eduardo Rampon Meireles
            </div>
            <div id="owner">Eu</div>
            <div id="createdAt">14/09/2001</div>
            <div id="size">1mb</div>
          </div>   
          <div className="row">
            <div id="name">
              <MdFolder size={24} />
              Eduardo Rampon Meireles
            </div>
            <div id="owner">Eu</div>
            <div id="createdAt">14/09/2001</div>
            <div id="size">1mb</div>
          </div> 
          <div className="row">
            <div id="name">
              <MdFolder size={24} />
              Eduardo Rampon Meireles
            </div>
            <div id="owner">Eu</div>
            <div id="createdAt">14/09/2001</div>
            <div id="size">1mb</div>
          </div> 
          <div className="row">
            <div id="name">
              <MdFolder size={24} />
              Eduardo Rampon Meireles
            </div>
            <div id="owner">Eu</div>
            <div id="createdAt">14/09/2001</div>
            <div id="size">1mb</div>
          </div> 
          </Scroll>

        </Files>

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