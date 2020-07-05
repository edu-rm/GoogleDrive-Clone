import React, { useState } from 'react';

import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { createFolderRequest } from '../../store/modules/folder/actions';

import { MdClose } from 'react-icons/md';


import { Container } from './styles';

function Modal({ showModal, setShowModal }) {
  const [newFolderName, setNewFolderName] = useState('Pasta sem nome');
  
  const currentFolder = useSelector((state) => state.folder.father);

  const dispatch = useDispatch();
  
  function handleModalClose() {
    setShowModal(!showModal);
  }

  function handleCreateFolder() {

    dispatch(createFolderRequest(newFolderName, currentFolder || 1));

    setShowModal(false);
  }

  return (
    <Container show={showModal}>
      <div className="folder-name">
        <div className="header">
          <h3>Nova Pasta</h3>
          <MdClose onClick={handleModalClose} size={24} />
        </div>
        <input 
          value={newFolderName} 
          type="text"
          onChange={(e) => setNewFolderName(e.target.value)}
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