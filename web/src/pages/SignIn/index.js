import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

import history from '../../services/history';

import { Container, Content } from './styles';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(){
    dispatch(signInRequest(email, password));

  }

  return (
    <Container>
      <Content>
        <h1>Fazer login</h1>
        <p>Ir para o Duolc</p>
        <form onSubmit={handleSubmit}>
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
              onChange={setPassword}
            />
          </div>
        </form>
        <div className="footer-signin">
          <Link to='/signup'>Crie uma conta</Link>
          <button onClick={handleSubmit}>
            Próxima
          </button>
        </div>

      </Content>
    </Container>
  );
}

export default SignIn;