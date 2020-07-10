import React from 'react';
import { AiOutlineFile, AiFillCheckCircle } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';



import { Container } from './styles';

function FileUploader() {
  return (
    <Container>
      <div className="header">
        <p>1 upload concluido</p>
        <button>
          <IoIosArrowDown size={24} />
        </button>
      </div>
      <div className="body">
        <div className="name-icon">
          <AiOutlineFile size={24} />
          <p>nome</p>
        </div>
        <AiFillCheckCircle size={24} color="green"/>
      </div>
    </Container>
  );
}

export default FileUploader;