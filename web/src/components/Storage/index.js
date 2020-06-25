/* eslint-disable react/style-prop-object */
import React from 'react';

import { MdStorage } from 'react-icons/md';

import { Link } from 'react-router-dom'

import { Container } from './styles';

function Storage() {
  return (
    <Container>
      <div className="storage">
        <Link to="/dashboard">
          <MdStorage size={24} />
          <p>Armazenamento</p>
        </Link>
      </div>
      <div className="barra">
        <p id="">1 MB de 5 MB usados</p>
        <svg width="100%" height="3px">
          <rect width="50%" height="3px" />
        </svg>
      </div>
    </Container>
  );
}

export default Storage;