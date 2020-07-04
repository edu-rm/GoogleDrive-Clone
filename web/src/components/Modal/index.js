import React, { useState } from 'react';

import { MdClose } from 'react-icons/md';

import { Container } from './styles';

function Modal({ showModal, setShowModal }) {
  const [inputValue, setInputValue] = useState('Pasta sem nome');

  function handleModalClose() {
    setShowModal(!showModal);
  }

  return (
    <Container show={showModal}>
      <div className="folder-name">
        <div className="header">
          <h3>Nova Pasta</h3>
          <MdClose onClick={handleModalClose} size={24} />
        </div>
        <input 
          value={inputValue} 
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="footer">
          <button onClick={handleModalClose} id="cancelar">
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