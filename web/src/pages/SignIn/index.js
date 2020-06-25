import React from 'react';

import { Container, Content } from './styles';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

function SignIn() {

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
            />
          </div>
          <div className="senha">
            <Input 
              id="senha-login" 
              type="text"
              labelContent="Senha"
            />
          </div>
        </form>
        <div className="footer-signin">
          <Link id="signin" to='/signin'>Faça login</Link>
          <button type="button">
            <Link to='/'>Próxima</Link>
          </button>
        </div>

      </Content>
    </Container>
  );
}

export default SignIn;