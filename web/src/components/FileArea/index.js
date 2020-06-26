import React from 'react';
// import {useDropzone} from 'react-dropzone'
import DropZone from '../DropZone';
import { MdDelete, MdViewHeadline } from 'react-icons/md';

import { Container, Header } from './styles';

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
      <DropZone />
    </Container>
  );
}

export default FileArea;