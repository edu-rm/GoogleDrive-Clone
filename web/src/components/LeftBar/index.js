import React, { useState, useRef } from 'react';
import { MdCloudQueue, MdPeopleOutline, MdAdd, MdCreateNewFolder } from 'react-icons/md'


import { Link } from 'react-router-dom';

import { Container } from './styles';

function LeftBar({ setShowModal }) {
  const [activeMenu, setActiveMenu] = useState(false);


  function handleMenuVisibility() {
    console.log('here')
    setActiveMenu(!activeMenu);
  }

  function handleShowModal() {
    setShowModal(true);
  }

  return (
    <>
    <Container >
      <div className="new-button">
        <button onClick={handleMenuVisibility}>
          <MdAdd size={24} />
          Novo
        </button>
        <div className="menu" id={activeMenu ? 'visible' : 'invisible'}>
          <ul>
            <li onMouseOut={handleMenuVisibility} onClick={handleShowModal}>
              <MdCreateNewFolder size={24} />
              Criar nova pasta
            </li>
          </ul>
        </div>
      </div>
      <ul id="items">
        <li id="active">
          <Link to="/dashboard">
            <MdCloudQueue size={24} />
            <p>Meu Cloud</p>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <MdPeopleOutline size={24} />
            <p>Compartilhados comigo</p>
          </Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </Container>
    </>
  );
}

export default LeftBar;