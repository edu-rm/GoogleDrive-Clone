/* eslint-disable react/style-prop-object */
import React from 'react';
import { useSelector } from 'react-redux';

import { MdStorage } from 'react-icons/md';

import { Link } from 'react-router-dom'

import { Container } from './styles';

function Storage() {
  const storage = useSelector((state)=> state.storage.amount);

  return (
    <Container>
      <div className="storage">
        <Link to="/dashboard">
          <MdStorage size={24} />
          <p>Armazenamento</p>
        </Link>
      </div>
      <div className="barra">
        <p id="">{storage} de 3 MB usados</p>
        <svg width="100%" height="4px">
          <rect width={`${(100 * storage )/3 }%`} height="4.5px" />
        </svg>
      </div>
    </Container>
  );
}

export default Storage;