import React, { useState } from 'react';

import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';

import { MdClose } from 'react-icons/md';


import { Container } from './styles';

function Modal({ showModal, setShowModal }) {
  const [inputValue, setInputValue] = useState('Pasta sem nome');
  
  const currentFolder = useSelector((state) => state.folder.folder_id);
  const dispatch = useDispatch();
  
  function handleModalClose() {
    setShowModal(!showModal);
  }

  async function handleCreateFolder() {
    try {
      const response = await api.post('folders', {
        name: inputValue,
        father: Number(currentFolder)
      });

      setShowModal(false);
    } catch (e) {
      console.log(e);
    }


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
          <button onClick={handleCreateFolder} id="criar">
            CRIAR
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Modal;