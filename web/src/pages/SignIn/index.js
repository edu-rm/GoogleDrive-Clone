import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Container>
      <Content>
        <h1>Fazer login</h1>
        <p>Ir para o Duolc</p>
        <form>
          <div className="email">
            <Input 
              id="email-login" 
              type="text"
              labelContent="Email"
              onChange={setEmail}
            />
          </div>
          <div className="senha">
            <Input 
              id="senha-login" 
              type="text"
              labelContent="Senha"
              onChange={setSenha}
            />
          </div>
        </form>
        <div className="footer-signin">
          <Link id="signup" to='/signup'>Crie uma conta</Link>
          <button type="button">
            <Link to='/'>Próxima</Link>
          </button>
        </div>

      </Content>
    </Container>
  );
}

export default SignIn;