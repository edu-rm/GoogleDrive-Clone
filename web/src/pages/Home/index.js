import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Header, Content } from './styles';

function Home() {
  return (
    <>
      <Header>
        <div className="logo">
          <img src={logo} alt="logo"/>
          <h1>Duolc</h1>
        </div>
        <div className="right">
          <Link className="button-nav" to="/signin">Iniciar sessão</Link>
          <button type="button">
            <Link id='signup' to='/signup'>
              Crie uma conta
            </Link>
          </button>
        </div>
      </Header>
      <Content>
        <div className="text">
          <h1>Faça mais com o DuolcCloud</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi mollitia necessitatibus velit ipsum, placeat nulla sit? Laboriosam quam id facilis</p>
          <button type="button">
            <Link to='/signup'>
              Crie uma conta
            </Link>
          </button>
        </div>
        <div className="image">
          <img src="https://lh3.googleusercontent.com/ECyrzOoBiRQiYuSHIEFLet_HGwgbo32CoN-ltRJSwWJAAmhqOolGQEiZCxRmdWLeRoaHxBO3PDSTL98mfR3h5cVTj8N8yqqUr3lq=w790" alt="gmail"/>
        </div>
      </Content>
    </>
  );
}

export default Home;