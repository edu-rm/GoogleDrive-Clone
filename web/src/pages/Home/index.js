import React from 'react';

import logo from '../../assets/logo.png';

import { Container, Header } from './styles';

function Home() {
  return (
    <Container>
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
    </Container>
  );
}

export default Home;