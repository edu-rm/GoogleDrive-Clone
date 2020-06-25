import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

function SignUp() {
  return (
    <Container>
      <Content>
        <div className="left">
          <h2>Criar uma conta Duolc</h2>
          <h3>Preencha seus dados</h3>
          <form>
            <div className="nomes">
              <input type="text" placeholder="Nome"/>
              <input type="text" placeholder="Sobrenome"/>
            </div>
            <div className="email">
              <input type="email" placeholder="Email"/>
            </div>
            <div className="senha">
              <input type="password" placeholder="Senha"/>
              <input type="password" placeholder="Confirmar senha"/>
              <MdVisibility size={24} color="#000" />
            </div>
            <div className="form-footer">
              <Link id="signin" to='/signin'>Faça login</Link>
              <button type="button">
                <Link to='/'>Próxima</Link>
              </button>
            </div>
          </form>
        </div>
        <div className="right">
          <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="defesa"/>
          <p>Uma conta, milhares de arquivos</p>
        </div>
      </Content>
    </Container>
  );
}

export default SignUp;