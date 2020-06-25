import React from 'react';
import { MdCloudQueue, MdPeopleOutline } from 'react-icons/md'

import { Link } from 'react-router-dom';

import { Container } from './styles';

function LeftBar() {
  return (
    <Container>
      <button>
        Novo
      </button>
      <ul>
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