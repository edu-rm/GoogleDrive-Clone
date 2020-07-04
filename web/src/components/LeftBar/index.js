import React, { useState } from 'react';
import { MdCloudQueue, MdPeopleOutline, MdAdd, MdCreateNewFolder } from 'react-icons/md'

import { Link } from 'react-router-dom';

import { Container } from './styles';

function LeftBar() {
  const [activeMenu, setActiveMenu] = useState(false);

  function handleNewClick() {
    setActiveMenu(!activeMenu);
  }

  return (
    <Container>
      <div className="new-button">
        <button onClick={handleNewClick}>
          <MdAdd size={24} />
          Novo
        </button>
        <div className="menu" id={activeMenu ? 'visible' : 'invisible'}>
          <ul>
            <li>
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
  );
}

export default LeftBar;