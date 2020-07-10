import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MdSearch } from 'react-icons/md';

import logo from '../../assets/logo.png';

import { Header, Container } from './styles';

import LeftBar from '../../components/LeftBar';
import Storage from '../../components/Storage';
import FileArea from '../../components/FileArea';
import Modal from '../../components/Modal';
import FileUploader from '../../components/FileUploader';

function Dashboard() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <Container>
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
          <Link to="button">
            <img src="https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg" alt="avatar"/>
          </Link>
        </div>
      </Header>
      <div className="left-bar">
        <LeftBar 
          setShowModal={setModalShow} 
        />
        <Storage />
      </div>
      <FileArea showModal={modalShow}  />
      <Modal 
        showModal={modalShow} 
        setShowModal={setModalShow} 
      />
      <FileUploader />
    </Container>
  );
}

export default Dashboard;