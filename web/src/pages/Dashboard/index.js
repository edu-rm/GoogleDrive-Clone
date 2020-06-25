import React from 'react';
import { Link } from 'react-router-dom';

import { MdSearch } from 'react-icons/md';

import logo from '../../assets/logo.png';

import { Header } from './styles';

function Dashboard() {
  return (
    <Header>
      <div className="logo">
        <img src={logo} alt="logo"/>
        <h1>Duolc</h1>
      </div>
      <div className="search">
        <button>
          <MdSearch color='gray' size={28} />
        </button>
        <input type="text" placeholder="Pesquisar"/>
      </div>
      <div className="right">
        <Link type="button">
          <img src="https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg" alt="avatar"/>
        </Link>
      </div>
    </Header>
  );
}

export default Dashboard;