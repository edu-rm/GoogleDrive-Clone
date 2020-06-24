import React from 'react';

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
          <a href="#">Iniciar sessão</a>
          <button type="button">
            Crie uma conta
          </button>
        </div>
      </Header>
      <Content>
        <div className="text">
          <h1>Faça mais com o DuolcCloud</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi mollitia necessitatibus velit ipsum, placeat nulla sit? Laboriosam quam id facilis</p>
          <button type="button">
            Crie uma conta
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