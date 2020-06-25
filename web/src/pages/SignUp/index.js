import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import Input from '../../components/Input';

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
              <div className="nome">
                {/* <label htmlFor="input-nome">Nome</label> */}
                <Input 
                  id="input-nome"
                  type="text"
                  labelContent="Nome"
                  size="small"
                />
              </div>
              <div className="sobrenome">
                <Input 
                  type="text" 
                  id="input-sobrenome"
                  labelContent="Sobrenome"
                  size="small"
                />
              </div>
            </div>
            <div className="email">
              <Input 
                type="email" 
                id="email"   
                labelContent="Email"
                size="small"
              />
            </div>

            <div className="senha">
              <div className="primeira-senha">
                <Input 
                  type="password" 
                  id="senha1"
                  labelContent="Senha"
                  size="small"
                />
              </div>
              <div className="confirmar-senha">
                <Input 
                  type="password" 
                  id="senha2"
                  labelContent="Confirmar"
                  size="small"
                />
              </div>

            
              <MdVisibility size={40} color="#000" />
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