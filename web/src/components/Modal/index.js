import React, { useState } from 'react';

import { MdClose } from 'react-icons/md';

import { Container } from './styles';

function Modal() {
  const [inputValue, setInputValue] = useState('Pasta sem nome');
  const [show, setShow] = useState(true);
  return (
    <Container show={show}>
      <div className="folder-name">
        <div className="header">
          <h3>Nova Pasta</h3>
          <MdClose size={24} />
        </div>
        <input 
          value={inputValue} 
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="footer">
          <button id="cancelar">
            CANCELAR
          </button>
          <button id="criar">
            CRIAR
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Modal;