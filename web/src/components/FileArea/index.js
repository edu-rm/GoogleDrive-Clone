import React from 'react';
// import {useDropzone} from 'react-dropzone'
import DropZone from '../DropZone';

import { MdDelete, MdViewHeadline, MdFolder } from 'react-icons/md';

import { Container, Header, Files } from './styles';

function FileArea() {


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
        <Files display="grade">
          <div className="header">
            <p id="name">
              Nome
            </p>
            <p id="owner">Proprietário</p>
            <p id="createdAt">Criação</p>
            <p id="size">Tamanho</p>
          </div>
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
              
              

        </Files>
      </div>
      
    </Container>
  );
}

export default FileArea;